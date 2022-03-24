import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app/app';
import { films } from './mocks/films';

const LIMIT = 20;

const appSettings = {
  limit: LIMIT,
  promoFilm: films[0],
  films,
};

ReactDOM.render(
  <StrictMode>
    <App
      {...appSettings}
    />
  </StrictMode>,
  document.getElementById('root'),
);
