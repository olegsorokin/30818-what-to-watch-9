import { createAsyncThunk } from '@reduxjs/toolkit';
import { generatePath } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api, store } from './index';
import { Comment, CommentData } from '../types/comment';
import { Film, FilmData } from '../types/film';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute } from '../constants/routs';
import { AuthorizationStatus } from '../constants/auth';
import { handleError } from '../services/handle-error';
import { Auth } from '../types/auth';
import { User } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { loadData } from '../utils/common';
import { PromiseState } from '../constants/promise-state';
import { loadUser, requireAuthorization } from './user-process/user-process';
import { loadFilm, loadFilms, loadPromo, loadSimilarFilms } from './films/films';
import { loadComments } from './comments/comments';
import { FavoriteData } from '../types/favorite';
import { loadFavorites } from './favorites/favorites';

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const { data } = await api.get(APIRoute.Login);
      store.dispatch(loadUser(data));
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
      const { data } = await api.post<User>(APIRoute.Login, { email, password });
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(loadUser(data));
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
    const { films } = store.getState().FILMS;
    try {
      store.dispatch(loadFilms(loadData({ ...films, data: [] }, PromiseState.PENDING)));
      const { data } = await api.get<Film[]>(APIRoute.Films);
      store.dispatch(loadFilms(loadData({ ...films, data }, PromiseState.FULFILLED)));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchSimilarFilms = createAsyncThunk(
  'data/fetchSimilarFilms',
  async ({ filmId }: FilmData) => {
    const { similarFilms } = store.getState().FILMS;
    try {
      store.dispatch(loadSimilarFilms(loadData({ ...similarFilms, data: [] }, PromiseState.PENDING)));
      const { data } = await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`);
      store.dispatch(loadSimilarFilms(loadData({ ...similarFilms, data }, PromiseState.FULFILLED)));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchFilm = createAsyncThunk(
  'data/fetchFilm',
  async ({ filmId }: FilmData) => {
    const { film } = store.getState().FILMS;
    try {
      store.dispatch(loadFilm(loadData({ ...film, data: null }, PromiseState.PENDING)));
      const { data } = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
      store.dispatch(loadFilm(loadData({ ...film, data }, PromiseState.FULFILLED)));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchPromo = createAsyncThunk(
  'data/fetchPromo',
  async () => {
    const { promo } = store.getState().FILMS;
    try {
      store.dispatch(loadPromo(loadData({ ...promo, data: null }, PromiseState.PENDING)));
      const { data } = await api.get<Film>(APIRoute.Promo);
      store.dispatch(loadPromo(loadData({ ...promo, data }, PromiseState.FULFILLED)));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchComments = createAsyncThunk(
  'data/fetchComments',
  async ({ filmId }: FilmData) => {
    const { comments } = store.getState().COMMENTS;
    try {
      store.dispatch(loadComments(loadData({ ...comments, data: [] }, PromiseState.PENDING)));
      const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${filmId}`);
      store.dispatch(loadComments(loadData({ ...comments, data }, PromiseState.FULFILLED)));
    } catch (error) {
      handleError(error);
    }
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

export const addToFavorite = createAsyncThunk(
  'data/addToFavorite',
  async ({ filmId, status }: FavoriteData) => {
    try {
      await api.post(`${APIRoute.Favorite}/${filmId}/${status}`);
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchFavorite = createAsyncThunk(
  'data/fetchFavorite',
  async () => {
    const { favorite } = store.getState().FAVORITE;
    try {
      store.dispatch(loadFavorites(loadData({ ...favorite, data: [] }, PromiseState.PENDING)));
      const { data } = await api.get(`${APIRoute.Favorite}`);
      store.dispatch(loadFavorites(loadData({ ...favorite, data }, PromiseState.FULFILLED)));
    } catch (error) {
      handleError(error);
    }
  },
);
