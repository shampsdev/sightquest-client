import { API_URL, WS_URL } from '@env';
import { ICoords } from '@/interfaces/ICoords';
import { useGameStore } from '../store/useGameStore';
import { IGameState } from '@/interfaces/IGameState';
import axios, { AxiosResponse } from 'axios';
import {
  ILocationUpdate,
  ISettingsUpdate,
  IStartGame,
  ITaskCompleted,
} from '@/interfaces/IEvent';
import { measure } from '../lib/helper-functions';
import { useSockets } from './useSockets';
import { useLocation } from './useLocation';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { ISettings } from '@/interfaces/ISettings';
import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { CameraCapturedPicture } from 'expo-camera';

export const useGame = () => {
  const gameState = useGameStore((store) => store);
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

    if (message.event != 'location_update') console.log(message);

    switch (message.event) {
      case 'quest_completed':
        // userInterface.setUpdatePopup(message.event);
        break;
      case 'location_update':
        gameState.updatePlayerPosition(message.user, message.coordinates);
        break;
      case 'authorization':
        break;
      case 'settings_update':
        gameState.updateGameState(message);
        break;
      case 'status':
        break;
      case 'start_game':
        gameState.updateGameState({
          ...gameState,
          state: 'PLAYING',
        });
        break;
      case 'gamestate_update':
        gameState.updateGameState(message.state);
        break;
      default:
        sockets.send(
          JSON.stringify({
            event: 'get_game_state',
          })
        );
        throw new Error('Unknown message received.');
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
      task_id: 0,
    };

    console.log(JSON.stringify(updateQuestCompleted));

    sockets.send(JSON.stringify(updateQuestCompleted));
  };

  const getPlayer = () => {
    return gameState.players.find((x) => x.user.id == user.id);
  };

  const inRange = () => {
    const runners = gameState.players.filter((x) => x.role == 'RUNNER');

    return runners.some((x) => {
      return (
        measure(
          x.coordinates,
          getPlayer()?.coordinates ?? { latitude: 0, longitude: 0 }
        ) <= 100
      );
    });
  };

  return {
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
    },
    settings: {
      updateQuestPoints,
      updateGameSettings,
    },
    game: {
      completeQuest,
    },
    player: getPlayer(),
    inRange,
  };
};
