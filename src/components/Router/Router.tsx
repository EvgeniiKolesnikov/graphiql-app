import { MainPage, NotFoundPage, SignPage, WelcomePage } from 'pages';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout, Spinner } from '..';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';
import { useAuth } from '../../hooks/auth/useAuth';

const Router = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<WelcomePage />} />
        <Route
          path="main"
          element={
            <ProtectedRoute protectSigned={true} defaultRoute="/">
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="sign"
          element={
            <ProtectedRoute protectSigned={false} defaultRoute="/main">
              <SignPage />
            </ProtectedRoute>
          }
        />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
};

export default Router;
