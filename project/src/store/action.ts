import { createAction } from '@reduxjs/toolkit';

import { GenreEnum } from '../constants/genres';
import { Film } from '../types/film';

const CHANGE_GENRE = 'CHANGE_GENRE';
const LOAD_FILMS = 'LOAD_FILMS';
const LOAD_PROMO = 'LOAD_PROMO';

export const changeGenre = createAction<GenreEnum>(CHANGE_GENRE);
export const loadFilms = createAction<Film[]>(LOAD_FILMS);
export const loadPromo = createAction<Film>(LOAD_PROMO);
