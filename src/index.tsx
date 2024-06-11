import ReactDOM from 'react-dom/client';

import 'swiper/css';
import './styles/index.scss';

import { Router } from '@components/router';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
);
