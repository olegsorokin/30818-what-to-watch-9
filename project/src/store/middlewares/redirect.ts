import { Middleware } from 'redux';

import { reducer } from '../reducer';
import browserHistory from '../../browser-history';
import { REDIRECT_TO_ROUTE } from '../action';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === REDIRECT_TO_ROUTE) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
