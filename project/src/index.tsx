import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { App } from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
