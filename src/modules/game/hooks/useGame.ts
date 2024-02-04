import { API_URL, WS_URL } from '@env';
import { ICoords } from '@/interfaces/ICoords';
import { useGameStore } from '../store/useGameStore';
import { IGameState } from '@/interfaces/IGameState';
import axios, { AxiosResponse } from 'axios';
import { ILocationUpdate, ITaskCompleted } from '@/interfaces/IEvent';
import { measure } from '../lib/helper-functions';
import { useSockets } from './useSockets';
import { useLocation } from './useLocation';
import { IUser } from '@/interfaces/IUser';

export const useGame = () => {
  const gameState = useGameStore((store) => store);
  const sockets = useSockets();
  const location = useLocation();

  // const { user } = useAuth();
  const user: IUser = {
    id: 2,
    username: 'mike',
    avatar:
      'https://media.licdn.com/dms/image/D4E03AQEZcX3i65uV9g/profile-displayphoto-shrink_800_800/0/1681386993606?e=2147483647&v=beta&t=6xXgX1YBGZNI17rfS5vadMzxfSAW4nnqp-kyZsIrjg4',
  };
  if (user == null) throw Error('No user found!');

  const createLobby = async () => {
    const res = await axios.post<
      IGameState,
      AxiosResponse<IGameState, IGameState>
    >(`${API_URL}/games/create`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MDY4MzY3LCJpYXQiOjE3MDcwNjgwNjcsImp0aSI6IjBmNjUxNTgxOWQ1ZDQ2M2Q4NDRkYmZjYjk0NTEzYjZiIiwidXNlcl9pZCI6MiwidXNlcm5hbWUiOiJtaWtlIn0.KVkDEozPJDBnbli8s_tcuLv09wqwL-CQnwiS7HCgt4I',
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
  };

  const parseIncomingMessage = (event: WebSocketMessageEvent) => {
    const message = JSON.parse(event.data);

    switch (message.event) {
      case 'quest_completed':
        break;
      case 'location_update':
        break;
      case 'authorization':
        break;
      case 'status':
        console.log(message);
        break;
      case 'gamestate_update':
        gameState.updateGameState(message.state);
        break;
      default:
        throw new Error('Unknown message received.');
    }
  };

  sockets.receive(parseIncomingMessage);

  const updatePlayerPosition = (coordinates: ICoords) => {
    const locationUpdate: ILocationUpdate = {
      event: 'location_update',
      user: user,
      timestamp: new Date(),
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
      timestamp: new Date(),
      photo: photo,
      task_id: 0,
    };

    sockets.send(JSON.stringify(updateQuestCompleted));
  };

  const getPlayer = () => {
    return gameState.players.find((x) => x.user.id == user.id);
  };

  const inRange = () => {
    const runners = gameState.players.filter((x) => x.role == 'runner');

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
    },
    state: {
      updateQuestCompleted,
      markers: gameState.settings.quest_points,
      players: gameState.players,
      updateGameStatus: gameState.updateGameStatus,
    },
    player: getPlayer(),
    inRange,
  };
};
