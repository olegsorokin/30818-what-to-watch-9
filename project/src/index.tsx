import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app/app';
import { films } from './mocks/films';

const LIMIT = 20;

const appSettings = {
  limit: LIMIT,
  promo: {
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    released: 2014,
  },
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
