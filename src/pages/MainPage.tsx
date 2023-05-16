import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { Navigate } from 'react-router-dom';

export const MainPage = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to={'/'} replace />;
  }

  return <h1>EDITORE</h1>;
};
