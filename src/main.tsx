<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './components/app/App';
=======
import { App } from './components';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
>>>>>>> 584d71c0457dde6ef17d433d9a525b2183f4bd2b

import './styles/style.scss';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <App />
>>>>>>> 584d71c0457dde6ef17d433d9a525b2183f4bd2b
  </React.StrictMode>
);
