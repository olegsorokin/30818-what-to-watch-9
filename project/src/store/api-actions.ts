import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from './index';
import { Film } from '../types/film';
import { loadFilms, loadPromo, requireAuthorization } from './action';
import { APIRoute } from '../constants/routs';
import { AuthorizationStatus } from '../constants/auth';
import { errorHandle } from '../services/error-handle';

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

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);
