import { createAction } from '@reduxjs/toolkit';

import { GenreEnum } from '../constants/genres';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../constants/auth';
import { InitialState } from './reducer';
import { AppRoute } from '../constants/routs';

const CHANGE_GENRE = 'CHANGE_GENRE';
const LOAD_FILMS = 'LOAD_FILMS';
const LOAD_SIMILAR_FILMS = 'LOAD_SIMILAR_FILMS';
const LOAD_FILM = 'LOAD_FILM';
const LOAD_PROMO = 'LOAD_PROMO';
const REQUIRE_AUTHORIZATION = 'REQUIRE_AUTHORIZATION';
export const REDIRECT_TO_ROUTE = 'REDIRECT_TO_ROUTE';

export const changeGenre = createAction<GenreEnum>(CHANGE_GENRE);
export const loadFilms = createAction<Film[]>(LOAD_FILMS);
export const loadSimilarFilms = createAction<InitialState['similarFilms']>(LOAD_SIMILAR_FILMS);
export const loadFilm = createAction<InitialState['film']>(LOAD_FILM);
export const loadPromo = createAction<Film>(LOAD_PROMO);
export const requireAuthorization = createAction<AuthorizationStatus>(REQUIRE_AUTHORIZATION);
export const redirectToRoute = createAction<AppRoute>(REDIRECT_TO_ROUTE);
