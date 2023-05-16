import { useAuth } from '../hooks/auth/useAuth';
import { Navigate } from 'react-router-dom';

export const MainPage = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={'/'} replace />;
  }

  return <h1>EDITORE</h1>;
};
