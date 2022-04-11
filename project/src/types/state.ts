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
    items: Film[];
    isLoading: boolean;
    isLoaded: boolean;
  };
  film: {
    data: Film | null;
    isLoading: boolean;
    isLoaded: boolean;
  };
  similarFilms: {
    items: Film[];
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
    items: Comment[];
    isLoading: boolean;
    isLoaded: boolean;
  };
}

export type FavoriteState = {
  favorite: {
    items: Film[];
    isLoading: boolean;
    isLoaded: boolean;
  }
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
