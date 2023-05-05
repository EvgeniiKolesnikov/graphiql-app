import { Outlet } from 'react-router-dom';
import { AppFooter, AppHeader } from '..';
import s from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={s.wrapper}>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  );
};
