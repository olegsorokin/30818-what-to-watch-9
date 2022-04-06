import { GenreEnum } from '../constants/genres';
import { AuthorizationStatus } from '../constants/auth';
import { Film } from './film';
import { Comment } from './comment';

export type InitialState = {
  genre: GenreEnum,
  authorizationStatus: AuthorizationStatus,
  films: {
    data: Film[],
    isLoading: boolean,
    isLoaded: boolean,
  },
  similarFilms: {
    data: Film[],
    isLoading: boolean,
    isLoaded: boolean,
  },
  promo: {
    data: Film | null,
    isLoading: boolean,
    isLoaded: boolean,
  },
  film: {
    data: Film | null,
    isLoading: boolean,
    isLoaded: boolean,
  },
  comments: {
    data: Comment[],
    isLoading: boolean,
    isLoaded: boolean,
  },
};
