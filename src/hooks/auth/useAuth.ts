import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);

  return { user, loading, error };
};
