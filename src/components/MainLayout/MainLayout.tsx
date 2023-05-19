import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { AppFooter, AppHeader } from '..';

export const MainLayout = () => {
  return (
    <Fragment>
      <AppHeader />
      <main className="container fixed">
        <Outlet />
      </main>
      <AppFooter />
    </Fragment>
  );
};
