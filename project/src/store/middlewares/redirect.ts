import { Middleware } from 'redux';

import browserHistory from '../../browser-history';
import { reducer } from '../reducer';
import { REDIRECT_TO_ROUTE } from '../constants';

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
