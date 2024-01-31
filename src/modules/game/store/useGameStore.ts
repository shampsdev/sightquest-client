import { ICoords } from '@/interfaces/ICoords';
import { IGameState } from '@/interfaces/IGameState';
import { create } from 'zustand';

interface IGameStateActions {
  updateGameState: (state: IGameState) => void;
}

export const useGameStore = create<IGameState & IGameStateActions>((set) => ({
  id: 1,
  players: [
    {
      user: {
        id: 1,
        username: 'Mike',
        avatar:
          'https://media.licdn.com/dms/image/D4E03AQEZcX3i65uV9g/profile-displayphoto-shrink_200_200/0/1681386993606?e=2147483647&v=beta&t=Rh0f_0hKja2gh4zuI1WFlOo2Tyu4gjlm8kTzD7zfy6Y',
      },
      role: 'runner',
      coordinates: {
        latitude: 59.9311,
        longitude: 30.3609,
      },
    },
  ],
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
  ads: [
    {
      src: 'https://i6.photo.2gis.com/images/branch/0/30258560060372674_1b94.jpg',
      coordinates: {
        latitude: 59.958752,
        longitude: 30.306332,
      },
    },
  ],
  updateGameState: (state) => set(state),
}));
