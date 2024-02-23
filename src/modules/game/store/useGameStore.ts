import { ICoords } from '@/interfaces/ICoords';
import { IGameState } from '@/interfaces/IGameState';
import { ISettings } from '@/interfaces/ISettings';
import { IUser } from '@/interfaces/IUser';
import { create } from 'zustand';

interface IGameStateActions {
  updateGameState: (state: IGameState) => void;
  updatePlayerPosition: (id: IUser, coordinates: ICoords) => void;
  updateGameStatus: (status: 'LOBBY' | 'PLAYING' | 'ENDED') => void;
  updateGameSettings: (points: ISettings) => void;
}

export const useGameStore = create<IGameState & IGameStateActions>((set) => ({
  code: '',
  players: [],
  time_left: '1:00:00',
  settings: {
    quest_points: [],
    duration: '1:00:00',
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
        return state;
      }

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
  updateGameSettings: (settings) =>
    set((store) => {
      return {
        ...store,
        settings: settings,
      };
    }),
}));
