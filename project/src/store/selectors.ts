import { AuthorizationStatus } from '../constants/auth';
import { InitialState } from '../types/initial-state';

export function isAuthenticated(state: InitialState) {
  return state.authorizationStatus === AuthorizationStatus.Unknown || !state.films.isLoaded || !state.promo.isLoaded;
}
