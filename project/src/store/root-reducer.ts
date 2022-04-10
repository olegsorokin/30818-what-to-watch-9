import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../constants/name-space';
import { userProcess } from './user-process/user-process';
import { films } from './films/films';
import { comments } from './comments/comments';

export const rootReducer = combineReducers({
  [NameSpace.FILMS]: films.reducer,
  [NameSpace.COMMENTS]: comments.reducer,
  [NameSpace.USER]: userProcess.reducer,
});
