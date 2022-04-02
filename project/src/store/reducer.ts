import { createReducer } from '@reduxjs/toolkit';

import { changeGenre, loadFilms, loadPromo, requireAuthorization } from './action';
import { Film } from '../types/film';
import { GenreEnum } from '../constants/genres';
import { AuthorizationStatus } from '../constants/auth';

type InitialState = {
  genre: GenreEnum,
  films: Film[],
  promo: Film | null,
  isFilmsLoaded: boolean,
  isPromoLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
};

const initialState: InitialState = {
  genre: GenreEnum.ALL_GENRES,
  films: [],
  isFilmsLoaded: false,
  promo: null,
  isPromoLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
