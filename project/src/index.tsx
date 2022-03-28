import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app/app';
import { films } from './mocks/films';
import { Provider } from 'react-redux';
import { store } from './store';

const LIMIT = 4;

const appSettings = {
  limit: LIMIT,
  promoFilm: films[0],
  films,
};

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App
        {...appSettings}
      />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
