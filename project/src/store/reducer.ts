import { createReducer } from '@reduxjs/toolkit';

import { changeGenre, fetchFilms } from './action';
import { films } from '../mocks/films';
import { Film } from '../types/film';
import { GenreEnum } from '../constants/genres';

type InitialState = {
  genre: GenreEnum,
  films: Film[]
};

const initialState: InitialState = {
  genre: GenreEnum.ALL_GENRES,
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(fetchFilms, (state, action) => {
      switch (action.payload) {
        case GenreEnum.ALL_GENRES:
          state.films = films;
          break;
        default:
          state.films = films.filter((film) => film.genre === action.payload);
      }
    });
});

export { reducer };
