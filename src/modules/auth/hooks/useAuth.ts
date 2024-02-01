import { useAuthStore, IAuthStore } from '../store/useAuthStore';
import { useLocalStorage } from '@/modules/storage/hooks/useLocalStorage';

export const useAuth = () => {
  const localStorage = useLocalStorage();
  const { user, token, updateUser } = useAuthStore((store) => store);

  const login = async () => {
    console.log('Login initiated.');
    if (user != null) return;

    console.log('Looking for user on device.');
    const local_store = await localStorage.getData<IAuthStore>('user');
    if (local_store != null && local_store != undefined) {
      console.log('Found user on device. Logging in.');
      updateUser(local_store);
      return;
    }

    // console.log('Creating a new user.');
    // const res = await axios.post<{ username: string }, AxiosResponse<IUser>>(
    //   `${API_URL}/api/users/`,
    //   {
    //     username: username,
    //   }
    // );
    // console.log(res);

    // console.log('Getting user with id 1');

    // console.log(`${API_URL}/api/users/${1}`);
    // const res = await axios.get(`${API_URL}/api/users/${1}`).catch((e) => {
    //   console.log(e);
    // });
    // const user_data = res.data;

    // console.log(user_data);

    // const ans = await axios.post(`${API_URL}/api/users/token/`, {
    //   username: user_data.username,
    //   password: 'penis',
    // });

    // console.log(ans);

    // const { token, refresh } = ans.data;

    // const authStore = {
    //   user: user_data,
    //   token,
    //   refresh,
    // };

    // console.log(authStore);

    // localStorage.storeData<IAuthStore>('user', authStore);
    // updateUser(authStore);
  };

  return {
    user,
    token,
    manage: {
      login,
    },
  };
};
