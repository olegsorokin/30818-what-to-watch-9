import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../constants/name-space';
import { FavoriteState } from '../../types/state';

const initialState: FavoriteState = {
  favorite: {
    data: [],
    isLoading: false,
    isLoaded: false,
  },
};

export const favorites = createSlice({
  name: NameSpace.FAVORITE,
  initialState,
  reducers: {
    loadFavorites: (state, action) => {
      state.favorite = action.payload;
    },
  },
});

export const { loadFavorites } = favorites.actions;
