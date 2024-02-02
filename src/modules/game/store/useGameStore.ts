import { ICoords } from '@/interfaces/ICoords';
import { IGameState } from '@/interfaces/IGameState';
import { IUser } from '@/interfaces/IUser';
import { create } from 'zustand';

interface IGameStateActions {
  updateGameState: (state: IGameState) => void;
  updatePlayerPosition: (id: IUser, coordinates: ICoords) => void;
}

export const useGameStore = create<IGameState & IGameStateActions>((set) => ({
  id: 1,
  players: [],
  time_left: new Date(),
  rules: {
    quest_points: [
      {
        title: 'Спас на Крови',
        description:
          'Ммммммм, унюхал? Тут неподалёку продаются пышки. Эта пышечная существует с 1958 года! Иди туда, и насладись лакомством. Сфотографируй, чтобы остальные обзавидовались!',
        location: { latitude: 59.940148, longitude: 30.328847 },
        photo:
          'https://lh3.googleusercontent.com/p/AF1QipMM3V5X_dNT9Fv6Jp8atoWyjs6UYBBDtxDtzwdp=s1360-w1360-h1020',
      },
      {
        title: 'Исаакиевский Собор',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore iure dolorem dolorum doloribus obcaecati eum necessitatibus, exercitationem aperiam commodi.',
        location: { latitude: 59.934095, longitude: 30.306118 },
        photo:
          'https://lh3.googleusercontent.com/p/AF1QipOn-baVgB54Mp1S2evwchGUwDT1P3nErl_IJcKE=s1360-w1360-h1020',
      },
      {
        title: 'Петропавловская Крепость',
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
              role: 'runner',
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
}));
