import { API_URL } from '@env';
import { useAuthStore, IAuthStore } from '../store/useAuthStore';
import { useLocalStorage } from '@/modules/storage/hooks/useLocalStorage';
import axios from 'axios';

export const useAuth = () => {
  const localStorage = useLocalStorage();
  const { user, token, updateUser } = useAuthStore((store) => store);

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
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

    console.log('Getting user.');

    // Some code to get the user
    const user_data = (await axios.get(`${API_URL}/api/users/${1}`)).data;

    const { token, refresh } = (
      await axios.post(`${API_URL}/api/users/token/`, {
        username: 'mike',
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

  const clear = async () => {
    await localStorage.clear();
  };

  return {
    user,
    token,
    manage: {
      login,
      clear,
    },
  };
};
