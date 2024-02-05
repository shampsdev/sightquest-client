import { API_URL, WS_URL } from '@env';
import { ICoords } from '@/interfaces/ICoords';
import { useGameStore } from '../store/useGameStore';
import { IGameState } from '@/interfaces/IGameState';
import axios, { AxiosResponse } from 'axios';
import {
  ILocationUpdate,
  ISettingsUpdate,
  ITaskCompleted,
} from '@/interfaces/IEvent';
import { measure } from '../lib/helper-functions';
import { useSockets } from './useSockets';
import { useLocation } from './useLocation';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { ISettings } from '@/interfaces/ISettings';
import { IQuestPoint } from '@/interfaces/IQuestPoint';

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
    >(`${API_URL}/games/create`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.code;
  };

  const joinLobby = async (code: string) => {
    await sockets.connect(`${WS_URL}/ws/game/${code}/`);
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
  };

  const leaveLobby = async () => {
    sockets.disconnect();
  };

  const parseIncomingMessage = (event: WebSocketMessageEvent) => {
    const message = JSON.parse(event.data);

    switch (message.event) {
      case 'quest_completed':
        break;
      case 'location_update':
        gameState.updatePlayerPosition(message.user, message.coordinates);
        break;
      case 'authorization':
        break;
      case 'settings_update':
        console.log('parsed!');
        gameState.updateQuestPoints(message.settings.quest_points);
        break;
      case 'status':
        console.log(message);
        break;
      case 'gamestate_update':
        console.log(message.state.settings);
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
      timestamp: new Date().toDateString(),
      coordinates,
    };

    if (gameState.state == 'playing')
      sockets.send(JSON.stringify(locationUpdate));
  };

  location.setPositionUpdateCallback(updatePlayerPosition);

  const updateQuestCompleted = (photo: string) => {
    const updateQuestCompleted: ITaskCompleted = {
      event: 'task_completed',
      user: user,
      timestamp: new Date().toDateString(),
      photo: photo,
      task_id: 0,
    };

    sockets.send(JSON.stringify(updateQuestCompleted));
  };

  const updateGameSettings = (settings: ISettings) => {
    const updateGameSettings: ISettingsUpdate = {
      event: 'settings_update',
      user: user,
      timestamp: new Date().toDateString(),
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
      updateQuestCompleted,
      markers: gameState.settings.quest_points,
      players: gameState.players,
      updateGameStatus: gameState.updateGameStatus,
      lobby: gameState.code,
      settings: gameState.settings,
    },
    settings: {
      updateQuestPoints,
      updateGameSettings,
    },
    player: getPlayer(),
    inRange,
  };
};
