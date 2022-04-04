import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFilms, fetchPromo } from './store/api-actions';

const LIMIT = 8;

store.dispatch(fetchFilms());
store.dispatch(fetchPromo());

const appSettings = {
  limit: LIMIT,
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
