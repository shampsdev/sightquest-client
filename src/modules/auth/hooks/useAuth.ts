import { API_URL } from '@env';
import { useAuthStore, IAuthStore } from '../store/useAuthStore';
import { useLocalStorage } from '@/modules/storage/hooks/useLocalStorage';
import axios from 'axios';
import { useEffect } from 'react';

export const useAuth = () => {
  const localStorage = useLocalStorage();
  const { user, token, refresh, updateUser } = useAuthStore((store) => store);

  useEffect(() => {
    const loadUser = async () => {
      const localStore = await localStorage.getData<IAuthStore>('user');
      if (localStore) {
        console.log('Found user on device. Logging in.');
        updateUser(localStore);
      }
    };

    loadUser();
  }, []);

  const clear = async () => {
    await localStorage.clear();
    updateUser({
      user: null,
      token: null,
      refresh: null,
    });
  };

  const login = async (username: string) => {
    // Some code to get the user
    const user_data = (await axios.get(`${API_URL}/api/users/${username}`))
      .data;

    const { token, refresh } = (
      await axios.post(`${API_URL}/api/token/`, {
        username: username,
        password: 'penis',
      })
    ).data;

    const authStore = {
      user: user_data,
      token,
      refresh,
    };

    localStorage.storeData<IAuthStore>('user', authStore);
    updateUser(authStore);
  };

  const setProfilePhoto = (photo: string) => {
    if (user == null) throw Error('Cannot update profile picture of user null');
    updateUser({
      user: {
        ...user,
        avatar: photo,
      },
      token,
      refresh,
    });
  };

  return {
    user,
    token,
    manage: {
      login,
      clear,
      setProfilePhoto,
    },
  };
};
