import { API_URL } from '@env';
import { useAuthStore, IAuthStore } from '../store/useAuthStore';
import { useLocalStorage } from '@/modules/storage/hooks/useLocalStorage';
import axios from 'axios';
import { useEffect } from 'react';
import { ImagePickerAsset } from 'expo-image-picker';

export const useAuth = () => {
  const localStorage = useLocalStorage();
  const { user, token, refresh, updateUser } = useAuthStore((store) => store);

  useEffect(() => {
    const loadUser = async () => {
      const localStore = await localStorage.getData<IAuthStore>('user');
      if (localStore) {
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

  const login = async (username: string, password?: string) => {
    // Some code to get the user
    const user_data = (await axios.get(`${API_URL}/api/users/${username}`))
      .data;

    const { access, refresh } = (
      await axios.post(`${API_URL}/api/token/`, {
        username: username,
        password: password ?? 'penis',
      })
    ).data;

    const authStore = {
      user: user_data,
      token: access,
      refresh,
    };

    localStorage.storeData<IAuthStore>('user', authStore);
    updateUser(authStore);
  };

  const setProfilePhoto = async (picture: ImagePickerAsset) => {
    if (user == null) throw Error('Cannot update profile picture of user null');

    const formData = new FormData();

    const uri = picture.uri;
    const filename = uri.split('/').pop();

    const match = /\.(\w+)$/.exec(filename ?? 'unknown');
    const type = match ? `image/${match[1]}` : `image`;

    formData.append('username', user.username);
    formData.append('current_password', user.username);

    formData.append('avatar', {
      uri,
      name: filename,
      type,
    });

    const res = await axios.put(
      `${API_URL}/api/users/${user.username}/`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    updateUser({
      user: res.data,
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
