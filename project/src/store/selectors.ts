import { State } from '../types/state';
import { AuthorizationStatus } from '../constants/auth';

export function isAppDataLoaded(state: State): boolean {
  return state.USER.authorizationStatus !== AuthorizationStatus.Unknown;
}

export function isStatusAuth(state: State): boolean {
  return state.USER.authorizationStatus === AuthorizationStatus.Auth;
}

export function authorizationStatus(state: State) {
  return state.USER.authorizationStatus;
}

export function user(state: State) {
  return state.USER.user;
}

export function films(state: State) {
  return state.FILMS.films;
}

export function promo(state: State) {
  return state.FILMS.promo;
}

export function similarFilms(state: State) {
  return state.FILMS.similarFilms;
}

export function film(state: State) {
  return state.FILMS.film;
}

export function genres(state: State) {
  return state.FILMS.genres;
}

export function comments(state: State) {
  return state.COMMENTS.comments;
}

export function favorite(state: State) {
  return state.FAVORITE.favorite;
}
