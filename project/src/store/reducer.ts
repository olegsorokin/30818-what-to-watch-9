import { createReducer } from '@reduxjs/toolkit';

import { changeGenre, loadFilms, loadPromo } from './action';
import { Film } from '../types/film';
import { GenreEnum } from '../constants/genres';

type InitialState = {
  genre: GenreEnum,
  films: Film[],
  promo: Film | null,
  isFilmsLoaded: boolean,
  isPromoLoaded: boolean,
};

const initialState: InitialState = {
  genre: GenreEnum.ALL_GENRES,
  films: [],
  isFilmsLoaded: false,
  promo: null,
  isPromoLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isFilmsLoaded = true;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
      state.isPromoLoaded = true;
    });
});

export { reducer };
