import { createAction } from '@reduxjs/toolkit';

import { GenreEnum } from '../constants/genres';

const CHANGE_GENRE = 'CHANGE_GENRE';
const FETCH_FILMS = 'FETCH_FILMS';

export const changeGenre = createAction<GenreEnum>(CHANGE_GENRE);
export const fetchFilms = createAction<GenreEnum>(FETCH_FILMS);
