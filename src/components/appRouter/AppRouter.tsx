import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../../pages';
import { WelcomePage } from '../../pages';
import { MainPage } from '../../pages';
import { Layout } from 'components';

const AppRouter = () => {
  return (
    <div className="app-router__wrap">
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
