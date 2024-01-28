import { IGameState } from '@/interfaces/IGameState';
import { create } from 'zustand';

interface IGameStateActions {
  updateGameState: (state: IGameState) => void;
}

export const useGameStore = create<IGameState & IGameStateActions>((set) => ({
  players: [],
  time_left: new Date(),
  rules: {
    quest_points: [
      {
        title: 'Spas na krovi',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore iure dolorem dolorum doloribus obcaecati eum necessitatibus, exercitationem aperiam commodi.',
        location: { latitude: 59.940148, longitude: 30.328847 },
        photo:
          'https://lh3.googleusercontent.com/p/AF1QipMM3V5X_dNT9Fv6Jp8atoWyjs6UYBBDtxDtzwdp=s1360-w1360-h1020',
      },
      {
        title: 'Isakyevsky Sobor',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore iure dolorem dolorum doloribus obcaecati eum necessitatibus, exercitationem aperiam commodi.',
        location: { latitude: 59.934095, longitude: 30.306118 },
        photo:
          'https://lh3.googleusercontent.com/p/AF1QipOn-baVgB54Mp1S2evwchGUwDT1P3nErl_IJcKE=s1360-w1360-h1020',
      },
      {
        title: 'Petropalovskaya Krepost',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore iure dolorem dolorum doloribus obcaecati eum necessitatibus, exercitationem aperiam commodi.',
        location: { latitude: 59.949874, longitude: 30.315384 },
        photo:
          'https://avatars.mds.yandex.net/get-altay/1881820/2a0000016ae309b684b391e345b4b2ca894a/XXXL',
      },
    ],
    time: new Date(),
  },
  updateGameState: (state) => set(state),
}));
