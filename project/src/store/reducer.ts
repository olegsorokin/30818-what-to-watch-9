import { createReducer } from '@reduxjs/toolkit';

import {
  changeGenre,
  loadComments,
  loadFilm,
  loadFilms,
  loadPromo,
  loadSimilarFilms,
  requireAuthorization
} from './action';
import { GenreEnum } from '../constants/genres';
import { AuthorizationStatus } from '../constants/auth';
import { InitialState } from '../types/initial-state';

const initialState: InitialState = {
  genre: GenreEnum.ALL_GENRES,
  authorizationStatus: AuthorizationStatus.Unknown,
  films: {
    data: [],
    isLoading: false,
    isLoaded: false,
  },
  similarFilms: {
    data: [],
    isLoading: false,
    isLoaded: false,
  },
  promo: {
    data: null,
    isLoading: false,
    isLoaded: false,
  },
  film: {
    data: null,
    isLoading: false,
    isLoaded: false,
  },
  comments: {
    data: [],
    isLoading: false,
    isLoaded: false,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});

export { reducer };
