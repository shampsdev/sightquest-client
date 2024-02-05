import { ICoords } from '@/interfaces/ICoords';
import { IGameState } from '@/interfaces/IGameState';
import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { IUser } from '@/interfaces/IUser';
import { create } from 'zustand';

interface IGameStateActions {
  updateGameState: (state: IGameState) => void;
  updatePlayerPosition: (id: IUser, coordinates: ICoords) => void;
  updateGameStatus: (status: 'LOBBY' | 'PLAYING' | 'ENDED') => void;
  updateQuestPoints: (points: IQuestPoint[]) => void;
}

export const useGameStore = create<IGameState & IGameStateActions>((set) => ({
  code: '',
  players: [],
  time_left: new Date(),
  settings: {
    quest_points: [],
    duration: new Date(),
    mode: 'BASE',
  },
  state: 'LOBBY',
  updateGameState: (state) => set(state),
  updatePlayerPosition: (user, coordinates) => {
    set((state) => {
      const playerIndex = state.players.findIndex(
        (player) => player.user.id === user.id
      );

      if (playerIndex === -1) {
        // Player not found, add a new player
        return {
          players: [
            ...state.players,
            {
              user: user,
              coordinates,
              role: 'RUNNER',
              completed: [],
              secret: '',
            },
          ],
        };
      }

      // Player found, update their coordinates
      return {
        players: state.players.map((player, index) => {
          if (index === playerIndex) {
            return { ...player, coordinates };
          }
          return player;
        }),
      };
    });
  },
  updateGameStatus: (status) =>
    set((store) => {
      return {
        ...store,
        state: status,
      };
    }),
  updateQuestPoints: (points) =>
    set((store) => {
      return {
        ...store,
        settings: {
          ...store.settings,
          quest_points: points,
        },
      };
    }),
}));
