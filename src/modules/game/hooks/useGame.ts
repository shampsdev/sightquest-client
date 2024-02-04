import { API_URL, WS_URL } from '@env';
import { ICoords } from '@/interfaces/ICoords';
import { useGameStore } from '../store/useGameStore';
import { IGameState } from '@/interfaces/IGameState';
import axios, { AxiosResponse } from 'axios';
import { ILocationUpdate, ITaskCompleted } from '@/interfaces/IEvent';
import { measure } from '../lib/helper-functions';
import { IUser } from '@/interfaces/IUser';
import { useSockets } from './useSockets';

export const useGame = (user: IUser) => {
  const gameState = useGameStore((store) => store);
  const sockets = useSockets();

  const createLobby = async () => {
    const res = await axios.post<
      IGameState,
      AxiosResponse<IGameState, IGameState>
    >(`${API_URL}/games/create`);

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
    const updatedState = JSON.parse(event.data);

    switch (updatedState.event) {
      case 'quest_completed':
        // ui.setQuestPoint(updatedState);
        break;
      case 'location_update':
        gameState.updatePlayerPosition(
          updatedState.user,
          updatedState.location
        );
        break;
    }
  };

  const updatePlayerPosition = (coordinates: ICoords) => {
    const locationUpdate: ILocationUpdate = {
      event: 'location_update',
      user: user,
      timestamp: new Date(),
      location: coordinates,
    };

    sockets.send(JSON.stringify(locationUpdate));
  };

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
      updatePlayerPosition,
      markers: gameState.settings.quest_points,
      players: gameState.players,
    },
    player: getPlayer(),
    inRange,
    parseIncomingMessage,
  };
};
