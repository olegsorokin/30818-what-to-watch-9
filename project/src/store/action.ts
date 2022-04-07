import { createAction } from '@reduxjs/toolkit';

import * as ActionType from './constants';
import { AppRoute } from '../constants/routs';

export const redirectToRoute = createAction<AppRoute | string>(ActionType.REDIRECT_TO_ROUTE);
