import { MantineProvider } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { AppFooter, AppHeader } from '..';
import s from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <MantineProvider theme={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className={s.wrapper}>
        <AppHeader />
        <Outlet />
        <AppFooter />
      </div>
    </MantineProvider>
  );
};
