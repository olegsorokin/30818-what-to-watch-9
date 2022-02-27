import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app/app';
import { films } from './mocks/films';

const LIMIT = 20;

const appSettings = {
  limit: LIMIT,
  promoFilm: films[0],
  films: films,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      {...appSettings}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
