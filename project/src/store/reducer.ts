import { createReducer } from '@reduxjs/toolkit';

import { changeGenre, loadFilms, loadPromo } from './action';
import { Film } from '../types/film';
import { GenreEnum } from '../constants/genres';
import { TError } from '../types/error';

type InitialState = {
  genre: GenreEnum,
  films: {
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
};

const initialState: InitialState = {
  genre: GenreEnum.ALL_GENRES,
  films: {
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
    .addCase(loadPromo, (state, action) => {
      state.promo.data = action.payload;
      state.promo.isLoaded = true;
    });
});

export { reducer };
