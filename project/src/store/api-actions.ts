import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from './index';
import { Film } from '../types/film';
import { loadFilms, loadPromo } from './action';
import { APIRoute } from '../constants/routs';

export const fetchFilms = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const { data } = await api.get<Film[]>(APIRoute.Films);
    store.dispatch(loadFilms(data));
  },
);

export const fetchPromo = createAsyncThunk(
  'data/fetchPromo',
  async () => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    store.dispatch(loadPromo(data));
  },
);
