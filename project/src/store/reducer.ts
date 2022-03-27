import { createReducer } from '@reduxjs/toolkit';

import { changeGenre, fetchFilms } from './action';
import { films } from '../mocks/films';
import { Film } from '../types/film';
import { Genre } from '../constants/genres';

type InitialState = {
  genre: Genre,
  films: Film[]
}

const initialState: InitialState = {
  genre: Genre.ALL_GENRES,
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(fetchFilms, (state, action) => {
      switch (action.payload) {
        case Genre.ALL_GENRES:
          state.films = films;
          break;
        default:
          state.films = films.filter((film) => film.genre === action.payload);
      }
    });
});

export { reducer };
