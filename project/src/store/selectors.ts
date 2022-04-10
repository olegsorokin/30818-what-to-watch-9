import { State } from '../types/state';
import { AuthorizationStatus } from '../constants/auth';

export function isAppDataNotLoaded(state: State): boolean {
  return state.USER.authorizationStatus === AuthorizationStatus.Unknown || !state.FILMS.films.isLoaded || !state.FILMS.promo.isLoaded;
}
