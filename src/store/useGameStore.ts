import { IGameState } from '@/interfaces/IGameState';
import { create } from 'zustand';

interface IGameStateActions {
  updateGameState: (state: IGameState) => void;
}

export const useGameStore = create<IGameState & IGameStateActions>((set) => ({
  players: [],
  updateGameState: (state) => set(state),
}));
