import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth/useAuth';

interface Props extends PropsWithChildren {
  protectSigned: boolean;
  defaultRoute: string;
}

export const ProtectedRoute = ({ protectSigned, defaultRoute, children }: Props) => {
  const { user } = useAuth();

  if ((protectSigned && !user) || (!protectSigned && user)) {
    return <Navigate to={defaultRoute} replace />;
  }

  return <>{children}</>;
};
