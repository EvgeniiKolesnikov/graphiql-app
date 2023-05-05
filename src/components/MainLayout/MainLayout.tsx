import { Outlet } from 'react-router-dom';
import { AppFooter, AppHeader } from '..';

export const MainLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
};
