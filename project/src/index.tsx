import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app/app';
import { films } from './mocks/films';
import { promo } from './mocks/promo';

const LIMIT = 20;

const appSettings = {
  limit: LIMIT,
  promo: promo,
  films: films,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      limit={appSettings.limit}
      promoFilm={appSettings.promo}
      films={appSettings.films}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
