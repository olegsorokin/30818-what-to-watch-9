import { createReducer } from '@reduxjs/toolkit';

import { changeGenre, loadFilm, loadFilms, loadPromo, loadSimilarFilms, requireAuthorization } from './action';
import { Film } from '../types/film';
import { GenreEnum } from '../constants/genres';
import { AuthorizationStatus } from '../constants/auth';
import { TError } from '../types/error';

export type InitialState = {
  genre: GenreEnum,
  authorizationStatus: AuthorizationStatus,
  films: {
    data: Film[],
    isLoading: boolean,
    isLoaded: boolean,
    error: TError | null,
  },
  similarFilms: {
    data: Film[],
    isLoading: boolean,
    isLoaded: boolean,
    error: TError | null,
  },
  promo: {
    data: Film | null,
    isLoading: boolean,
    isLoaded: boolean,
    error: TError | null,
  },
  film: {
    data: Film | null,
    isLoading: boolean,
    isLoaded: boolean,
    error?: TError | null,
  },
};

const initialState: InitialState = {
  genre: GenreEnum.ALL_GENRES,
  authorizationStatus: AuthorizationStatus.Unknown,
  films: {
    data: [],
    isLoading: false,
    isLoaded: false,
    error: null,
  },
  similarFilms: {
    data: [],
    isLoading: false,
    isLoaded: false,
    error: null,
  },
  promo: {
    data: null,
    isLoading: false,
    isLoaded: false,
    error: null,
  },
  film: {
    data: null,
    isLoading: false,
    isLoaded: false,
    error: null,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films.data = action.payload;
      state.films.isLoaded = true;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo.data = action.payload;
      state.promo.isLoaded = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
