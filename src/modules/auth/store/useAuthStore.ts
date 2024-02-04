import { IUser } from '@/interfaces/IUser';
import { create } from 'zustand';

export interface IAuthStore {
  user: IUser | null;
  token: string | null;
  refresh: string | null;
}

interface IAuthStoreActions {
  updateUser: (auth: IAuthStore) => void;
}

export const useAuthStore = create<IAuthStore & IAuthStoreActions>((set) => ({
  user: null,
  token: null,
  refresh: null,
  updateUser: (state) => {
    console.log(state);
    return set(state);
  },
}));
