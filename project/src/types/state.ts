import { AuthorizationStatus } from '../constants/auth';
import { store } from '../store';
import { Film } from './film';
import { Comment } from './comment';
import { User } from './user';
import { Genre } from './genre';

export type UserProcessState = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
};

export type FilmsState = {
  films: {
    data: Film[];
    isLoading: boolean;
    isLoaded: boolean;
  };
  film: {
    data: Film | null;
    isLoading: boolean;
    isLoaded: boolean;
  };
  similarFilms: {
    data: Film[];
    isLoading: boolean;
    isLoaded: boolean;
  };
  promo: {
    data: Film | null;
    isLoading: boolean;
    isLoaded: boolean;
  };
  genres: Genre[];
};

export type CommentsState = {
  comments: {
    data: Comment[];
    isLoading: boolean;
    isLoaded: boolean;
  };
}

export type FavoriteState = {
  favorite: {
    data: Film[];
    isLoading: boolean;
    isLoaded: boolean;
  }
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
