import React from 'react';
import ReactDOM from 'react-dom/client';

import 'swiper/css';
import 'swiper/css/grid';
import './styles/index.scss';

import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { MainPage } from '@pages/main/main';
import { SproutyApp } from '@pages/details/sprouty-app/sprouty-app';

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainPage />} />
      <Route path='/projects/sprouty-app' element={<SproutyApp />} />
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
