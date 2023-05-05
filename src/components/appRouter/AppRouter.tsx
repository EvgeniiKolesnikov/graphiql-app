import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import WelcomePage from '../../pages/WelcomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '..';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
