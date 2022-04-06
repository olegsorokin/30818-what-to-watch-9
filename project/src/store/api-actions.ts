import { createAsyncThunk } from '@reduxjs/toolkit';
import { generatePath } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api, store } from './index';
import { Comment, CommentData } from '../types/comment';
import { Film, FilmData } from '../types/film';
import {
  loadComments,
  loadFilm,
  loadFilms,
  loadPromo,
  loadSimilarFilms,
  redirectToRoute,
  requireAuthorization
} from './action';
import { APIRoute, AppRoute } from '../constants/routs';
import { AuthorizationStatus } from '../constants/auth';
import { handleError } from '../services/handle-error';
import { Auth } from '../types/auth';
import { User } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { loadDataState } from '../utils/common';
import { PromiseState } from '../constants/promise-state';

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      handleError(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }: Auth) => {
    try {
      const { data: { token } } = await api.post<User>(APIRoute.Login, { email, password });
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      handleError(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      handleError(error);
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
      handleError(error);
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
      handleError(error);
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

export const fetchComments = createAsyncThunk(
  'data/fetchComments',
  async ({ filmId }: FilmData) => {
    const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${filmId}`);
    store.dispatch(loadComments(data));
  },
);

export const sendComment = createAsyncThunk(
  'data/sendComment',
  async ({ filmId, comment, rating }: CommentData) => {
    try {
      await api.post(`${APIRoute.Comments}/${filmId}`, { comment, rating });
      toast.success('Comment sent!');
      store.dispatch(redirectToRoute(generatePath(AppRoute.Film, { id: filmId })));
    } catch (error) {
      handleError(error);
    }
  },
);
