import { State } from '../types/state';
import { AuthorizationStatus } from '../constants/auth';

export function isAppDataLoaded(state: State): boolean {
  return state.USER.authorizationStatus !== AuthorizationStatus.Unknown && state.FILMS.films.isLoaded && state.FILMS.promo.isLoaded;
}

export function isStatusAuth(state: State): boolean {
  return state.USER.authorizationStatus === AuthorizationStatus.Auth;
}
