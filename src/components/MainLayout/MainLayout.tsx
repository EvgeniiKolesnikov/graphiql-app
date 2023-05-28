import s from './MainLayout.module.scss';
import { AppFooter, AppHeader } from '..';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <Fragment>
      <AppHeader />
      <main className={`${s.main} ${s.fixed}`}>
        <Outlet />
      </main>
      <AppFooter />
    </Fragment>
  );
};
