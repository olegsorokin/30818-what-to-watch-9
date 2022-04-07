import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../constants/name-space';
import { FilmsState } from '../../types/state';

const initialState: FilmsState = {
  films: {
    data: [],
    isLoading: false,
    isLoaded: false,
  },
  film: {
    data: null,
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
};

export const films = createSlice({
  name: NameSpace.FILMS,
  initialState,
  reducers: {
    loadFilms: (state, action) => {
      state.films = action.payload;
    },
    loadFilm: (state, action) => {
      state.film = action.payload;
    },
    loadSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
    loadPromo: (state, action) => {
      state.promo = action.payload;
    },
  },
});

export const { loadFilms, loadFilm, loadSimilarFilms, loadPromo } = films.actions;
