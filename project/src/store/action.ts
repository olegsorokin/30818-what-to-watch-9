import { createAction } from '@reduxjs/toolkit';

import * as ActionType from './constants';
import { GenreEnum } from '../constants/genres';
import { AuthorizationStatus } from '../constants/auth';
import { AppRoute } from '../constants/routs';
import { InitialState } from '../types/initial-state';

export const changeGenre = createAction<GenreEnum>(ActionType.CHANGE_GENRE);
export const loadFilms = createAction<InitialState['films']>(ActionType.LOAD_FILMS);
export const loadSimilarFilms = createAction<InitialState['similarFilms']>(ActionType.LOAD_SIMILAR_FILMS);
export const loadFilm = createAction<InitialState['film']>(ActionType.LOAD_FILM);
export const loadPromo = createAction<InitialState['promo']>(ActionType.LOAD_PROMO);
export const requireAuthorization = createAction<AuthorizationStatus>(ActionType.REQUIRE_AUTHORIZATION);
export const redirectToRoute = createAction<AppRoute | string>(ActionType.REDIRECT_TO_ROUTE);
export const loadComments = createAction<InitialState['comments']>(ActionType.LOAD_COMMENTS);
