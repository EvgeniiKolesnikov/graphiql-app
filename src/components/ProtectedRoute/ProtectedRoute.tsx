import { PropsWithChildren, Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
