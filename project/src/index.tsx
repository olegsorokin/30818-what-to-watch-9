import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { App } from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFilms, fetchPromo } from './store/api-actions';

const LIMIT = 8;

const appSettings = {
  limit: LIMIT,
};

store.dispatch(fetchFilms());
store.dispatch(fetchPromo());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        {...appSettings}
      />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
