import { useAuthStore } from '../store/useAuthStore';

export const useAuth = () => {
  const { user, token } = useAuthStore((store) => store);

  return { user, token };
};
