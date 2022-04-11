import { State } from '../types/state';
import { AuthorizationStatus } from '../constants/auth';

export function isAppDataLoaded(state: State): boolean {
  return state.USER.authorizationStatus !== AuthorizationStatus.Unknown;
}

export function isStatusAuth(state: State): boolean {
  return state.USER.authorizationStatus === AuthorizationStatus.Auth;
}
