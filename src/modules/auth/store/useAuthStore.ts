import { IUser } from '@/interfaces/IUser';
import { create } from 'zustand';

interface IAuthStore {
  user: IUser;
  token: string;
}

export const useAuthStore = create<IAuthStore>(() => ({
  user: {
    id: 1,
    username: 'Mike',
    avatar:
      'https://media.licdn.com/dms/image/D4E03AQEZcX3i65uV9g/profile-displayphoto-shrink_200_200/0/1681386993606?e=2147483647&v=beta&t=Rh0f_0hKja2gh4zuI1WFlOo2Tyu4gjlm8kTzD7zfy6Y',
  },
  token: '',
}));
