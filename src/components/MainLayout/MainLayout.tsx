import { MantineProvider } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { AppFooter, AppHeader } from '..';

export const MainLayout = () => {
  return (
    <MantineProvider withGlobalStyles theme={{ fontFamily: 'Roboto, sans-serif' }}>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </MantineProvider>
  );
};
