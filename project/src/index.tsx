import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const LIMIT = 20;

const appSettings = {
  limit: LIMIT,
  promo: {
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    released: 2014,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App limit={appSettings.limit} promoFilm={appSettings.promo}/>
  </React.StrictMode>,
  document.getElementById('root'),
);
