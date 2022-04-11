import { createSlice } from '@reduxjs/toolkit';

import { CommentsState } from '../../types/state';
import { NameSpace } from '../../constants/name-space';

const initialState: CommentsState = {
  comments: {
    data: [],
    isLoading: false,
    isLoaded: false,
  },
};

export const comments = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {
    loadComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { loadComments } = comments.actions;
