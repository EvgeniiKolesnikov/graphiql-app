import { MainPage, NotFoundPage, SignPage, WelcomePage } from 'pages';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '..';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="sign" element={<SignPage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
};

export default Router;
