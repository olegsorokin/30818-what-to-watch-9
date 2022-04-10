import { createAction } from '@reduxjs/toolkit';

import { AppRoute } from '../constants/routs';
import { REDIRECT_TO_ROUTE } from './constants';

export const redirectToRoute = createAction<AppRoute | string>(REDIRECT_TO_ROUTE);
