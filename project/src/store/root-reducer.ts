import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../constants/name-space';
import { films } from './films/films';
import { favorites } from './favorites/favorites';
import { comments } from './comments/comments';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.FILMS]: films.reducer,
  [NameSpace.FAVORITE]: favorites.reducer,
  [NameSpace.COMMENTS]: comments.reducer,
  [NameSpace.USER]: userProcess.reducer,
});
