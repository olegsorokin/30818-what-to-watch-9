import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../constants/genres';

const CHANGE_GENRE = 'CHANGE_GENRE';
const FETCH_FILMS = 'FETCH_FILMS';

export const changeGenre = createAction<Genre>(CHANGE_GENRE);
export const fetchFilms = createAction<Genre>(FETCH_FILMS);
