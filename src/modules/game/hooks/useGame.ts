import { IGameContext } from '@/interfaces/IGameContext';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

export const useGame = (): IGameContext => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
