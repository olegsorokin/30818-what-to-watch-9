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
import { Film } from '../types/film';
import { GenreEnum } from '../constants/genres';
import { AuthorizationStatus } from '../constants/auth';
import { Comment } from '../types/comment';

export type InitialState = {
  genre: GenreEnum,
  authorizationStatus: AuthorizationStatus,
  films: {
    data: Film[],
    isLoading: boolean,
    isLoaded: boolean,
  },
  similarFilms: {
    data: Film[],
    isLoading: boolean,
    isLoaded: boolean,
  },
  promo: {
    data: Film | null,
    isLoading: boolean,
    isLoaded: boolean,
  },
  film: {
    data: Film | null,
    isLoading: boolean,
    isLoaded: boolean,
  },
  comments: {
    data: Comment[],
    isLoading: boolean,
    isLoaded: boolean,
  },
};

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
