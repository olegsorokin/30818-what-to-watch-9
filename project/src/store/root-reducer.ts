import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../constants/name-space';
import { films } from './films/films';
import { favorites } from './favorites/favorites';
import { comments } from './comments/comments';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Films]: films.reducer,
  [NameSpace.Favorite]: favorites.reducer,
  [NameSpace.Comments]: comments.reducer,
  [NameSpace.User]: userProcess.reducer,
});
