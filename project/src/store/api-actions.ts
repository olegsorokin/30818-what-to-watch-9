import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from './index';
import { Film, FilmData } from '../types/film';
import { loadFilm, loadFilms, loadPromo, loadSimilarFilms, requireAuthorization } from './action';
import { APIRoute } from '../constants/routs';
import { AuthorizationStatus } from '../constants/auth';
import { errorHandle } from '../services/error-handle';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken } from '../services/token';
import { loadDataState } from '../utils/common';
import { PromiseState } from '../constants/promise-state';

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

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }: AuthData) => {
    try {
      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchFilms = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const { data } = await api.get<Film[]>(APIRoute.Films);
    store.dispatch(loadFilms(data));
  },
);

export const fetchSimilarFilms = createAsyncThunk(
  'data/fetchSimilarFilms',
  async ({ filmId }: FilmData) => {
    const similarFilms = store.getState().similarFilms;
    try {
      store.dispatch(loadSimilarFilms({ ...similarFilms, data: [], ...loadDataState(PromiseState.PENDING) }));

      const { data } = await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`);

      store.dispatch(loadSimilarFilms({ ...similarFilms, data, ...loadDataState(PromiseState.FULFILLED) }));
    } catch (error) {
      errorHandle(error);
      store.dispatch(loadSimilarFilms({ ...similarFilms, error, ...loadDataState(PromiseState.REJECTED) }));
    }
  },
);

export const fetchFilm = createAsyncThunk(
  'data/fetchFilm',
  async ({ filmId }: FilmData) => {
    const film = store.getState().film;
    try {
      store.dispatch(loadFilm({ ...film, data: null, ...loadDataState(PromiseState.PENDING) }));

      const { data } = await api.get<Film>(`${APIRoute.Films}/${filmId}`);

      store.dispatch(loadFilm({ ...film, data, ...loadDataState(PromiseState.FULFILLED) }));
    } catch (error) {
      errorHandle(error);
      store.dispatch(loadFilm({ ...film, error, ...loadDataState(PromiseState.REJECTED) }));
    }
  },
);

export const fetchPromo = createAsyncThunk(
  'data/fetchPromo',
  async () => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    store.dispatch(loadPromo(data));
  },
);
