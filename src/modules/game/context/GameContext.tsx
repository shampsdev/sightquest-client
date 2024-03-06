import { ICoords } from '@/interfaces/ICoords';
import {
  ILocationUpdate,
  IPlayerCaught,
  IRequestCatch,
  ISettingsUpdate,
  IStartGame,
  ITaskCompleted,
} from '@/interfaces/IEvent';
import { IGameState } from '@/interfaces/IGameState';
import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { ISettings } from '@/interfaces/ISettings';
import { IUser } from '@/interfaces/IUser';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { API_URL, WS_URL } from '@env';
import axios, { AxiosResponse } from 'axios';
import { CameraCapturedPicture } from 'expo-camera';
import { ReactNode, createContext } from 'react';
import { useLocation } from '../hooks/useLocation';
import { useSockets } from '../hooks/useSockets';
import { useUserInterface } from '../hooks/useUserInterface';
import { useGameStore } from '../store/useGameStore';
import { measure } from '../lib/helper-functions';
import { IGameContext } from '@/interfaces/IGameContext';

export const GameContext = createContext<IGameContext | undefined>(undefined);

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const gameState = useGameStore((store) => store);
  const userInterface = useUserInterface();
  const sockets = useSockets();
  const location = useLocation();

  const { user, token } = useAuth();
  if (user == null) throw Error('No user found!');

  const createLobby = async () => {
    const res = await axios.post<
      IGameState,
      AxiosResponse<IGameState, IGameState>
    >(
      `${API_URL}/api/games/create/`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res.data);

    return res.data.code;
  };

  const joinLobby = async (code: string) => {
    console.log('joining lobby', code);
    await sockets.connect(`${WS_URL}/ws/game/${code}/`, () => {
      sockets.send(
        JSON.stringify({
          event: 'authorization',
          token: user.id,
        })
      );
      sockets.send(
        JSON.stringify({
          event: 'get_game_state',
        })
      );
    });
  };

  const leaveLobby = async () => {
    sockets.disconnect();
  };

  const parseIncomingMessage = (event: WebSocketMessageEvent) => {
    const message = JSON.parse(event.data);

    switch (message.event) {
      case 'task_completed':
        userInterface.setUpdatePopup(message);
        break;
      case 'location_update':
        gameState.updatePlayerPosition(message.user, message.coordinates);
        break;
      case 'authorization':
        break;
      case 'player_caught':
        userInterface.setCodePopup(false);
        sockets.send(
          JSON.stringify({
            event: 'get_game_state',
          })
        );
        break;
      case 'request_catch':
        if (message.to.id == user.id) userInterface.setCodePopup(true);
        break;
      case 'settings_update':
        gameState.updateGameSettings(message.settings);
        break;
      case 'status':
        break;
      case 'start_game':
        gameState.updateGameStatus('PLAYING');
        sockets.send(
          JSON.stringify({
            event: 'get_game_state',
          })
        );
        break;
      case 'gamestate_update':
        gameState.updateGameState(message.state);
        break;
      case 'error':
        throw new Error(message.message);
      default:
        sockets.send(
          JSON.stringify({
            event: 'get_game_state',
          })
        );
        console.log(message);
        throw new Error('Unknown message received');
    }
  };

  sockets.receive(parseIncomingMessage);

  const updatePlayerPosition = (coordinates: ICoords) => {
    const locationUpdate: ILocationUpdate = {
      event: 'location_update',
      user: user,
      timestamp: new Date().toISOString(),
      coordinates,
    };

    if (gameState.state == 'PLAYING')
      sockets.send(JSON.stringify(locationUpdate));
  };

  location.setPositionUpdateCallback(updatePlayerPosition);

  const startGame = () => {
    const updateGameStatus: IStartGame = {
      event: 'start_game',
      user: user,
      timestamp: new Date().toISOString(),
    };

    sockets.send(JSON.stringify(updateGameStatus));
  };

  const updateGameSettings = (settings: ISettings) => {
    const updateGameSettings: ISettingsUpdate = {
      event: 'settings_update',
      user: user,
      timestamp: new Date().toISOString(),
      settings: settings,
    };

    sockets.send(JSON.stringify(updateGameSettings));
  };

  const updateQuestPoints = (points: IQuestPoint[]) => {
    updateGameSettings({
      ...gameState.settings,
      quest_points: points,
    });
  };

  const completeQuest = async (picture: CameraCapturedPicture) => {
    const formData = new FormData();

    const uri = picture.uri;
    const filename = uri.split('/').pop();

    const match = /\.(\w+)$/.exec(filename ?? 'unknown');
    const type = match ? `image/${match[1]}` : `image`;

    formData.append('game_code', gameState.code);

    formData.append('image', {
      uri,
      name: filename,
      type,
    });

    const res = await axios.post(`${API_URL}/api/game-photos/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    const url = res.data.image;
    const id = res.data.id;

    const updateQuestCompleted: ITaskCompleted = {
      event: 'task_completed',
      user: user,
      timestamp: new Date().toISOString(),
      photo: url,
      photo_id: id,
      task_id: 2,
    };

    sockets.send(JSON.stringify(updateQuestCompleted));
  };

  const requestCatch = async (user: IUser) => {
    const playerCaught: IRequestCatch = {
      event: 'request_catch',
      user: user,
      timestamp: new Date().toISOString(),
      to: user,
    };

    sockets.send(JSON.stringify(playerCaught));
  };

  const catchPlayer = async (code: string) => {
    console.log(code);
    const playerCaught: IPlayerCaught = {
      event: 'player_caught',
      user: user,
      timestamp: new Date().toISOString(),
      secret: code,
    };

    sockets.send(JSON.stringify(playerCaught));
  };

  const getPlayer = () => {
    const player = gameState.players.find((x) => {
      return x.user.id === user.id;
    });
    return player;
  };

  const inRange = () => {
    const runners = gameState.players.filter((x) => x.role == 'RUNNER');

    return runners.filter((x) => {
      return (
        measure(
          x.coordinates,
          getPlayer()?.coordinates ?? { latitude: 0, longitude: 0 }
        ) <= 100
      );
    });
  };

  const value = {
    lobby: {
      createLobby,
      joinLobby,
      leaveLobby,
      code: gameState.code,
    },
    state: {
      startGame,
      markers: gameState.settings.quest_points,
      players: gameState.players,
      lobby: gameState.code,
      settings: gameState.settings,
      state: gameState.state,
      time_left: gameState.time_left,
    },
    settings: {
      updateQuestPoints,
      updateGameSettings,
    },
    game: {
      completeQuest,
      catchPlayer,
      requestCatch,
    },
    player: getPlayer(),
    inRange,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
