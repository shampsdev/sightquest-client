import { API_URL } from '@env';
import { useAuthStore, IAuthStore } from '../store/useAuthStore';
import { useLocalStorage } from '@/modules/storage/hooks/useLocalStorage';
import axios, { AxiosResponse } from 'axios';
import { IUser } from '@/interfaces/IUser';

export const useAuth = () => {
  const localStorage = useLocalStorage();
  const { user, token, updateUser } = useAuthStore((store) => store);

  const login = async (username: string) => {
    console.log('Login initiated.');
    if (user != null) return;

    console.log('Looking for user on device.');
    const local_store = await localStorage.getData<IAuthStore>('user');
    if (local_store != null && local_store != undefined) {
      console.log('Found user on device. Logging in.');
      updateUser(local_store);
      return;
    }

    console.log('Creating a new user.');
    const user_data = (
      await axios.post<{ username: string }, AxiosResponse<IUser, IUser>>(
        `${API_URL}/api/users/`,
        {
          username: username,
        }
      )
    ).data;

    console.log(user_data);

    const { token, refresh } = (
      await axios.post(`${API_URL}/api/users/token/`, {
        username: user_data.username,
        password: 'penis',
      })
    ).data;

    const authStore = {
      user: user_data,
      token,
      refresh,
    };

    console.log(authStore);

    localStorage.storeData<IAuthStore>('user', authStore);
    updateUser(authStore);
  };

  return {
    user,
    token,
    manage: {
      login,
    },
  };
};
