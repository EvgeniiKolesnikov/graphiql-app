import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components';
import './i18n/i18n';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import './styles/index.scss';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles theme={{ fontFamily: 'Roboto, sans-serif' }}>
        <Notifications />
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
