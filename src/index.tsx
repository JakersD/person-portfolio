import React from 'react';
import ReactDOM from 'react-dom/client';

import 'swiper/css';
import './styles/index.scss';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { MainPage } from '@pages/main/main';
import { SproutyApp } from '@pages/details/sprouty-app/sprouty-app';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/person-portfolio' element={<MainPage />} />
      <Route path='/person-portfolio/projects/sprouty-app' element={<SproutyApp />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
