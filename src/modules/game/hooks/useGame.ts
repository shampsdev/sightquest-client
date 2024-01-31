import { ICoords } from '@/interfaces/ICoords';
import { useGameStore } from '../store/useGameStore';
import { useSockets } from './useSockets';
import { API_URL } from '@env';
import axios from 'axios';

export const useGame = () => {
  const sockets = useSockets();
  const state = useGameStore((store) => store);

  const createLobby = () => {
    axios.post(`${API_URL}`, {
      players: [1],
      tasks: [1],
      settings: 1,
      started_at: '2024-01-31T16:11:48.783Z',
      ended_at: '2024-01-31T16:11:48.783Z',
      state: 'LOBBY',
    });
  };

  const joinLobby = () => {};

  const updatePlayerPosition = (coordinates: ICoords) => {};

  const updateQuestCompleted = (photo: string) => {};

  return {
    lobby: {
      createLobby,
      joinLobby,
    },
    game: {
      updateQuestCompleted,
      updatePlayerPosition,
    },
  };
};
