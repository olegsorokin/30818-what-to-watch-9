import { createSlice } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../../constants/auth';
import { NameSpace } from '../../constants/name-space';
import { UserProcessState } from '../../types/state';

const initialState: UserProcessState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const userProcess = createSlice({
  name: NameSpace.USER,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    loadUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { requireAuthorization, loadUser } = userProcess.actions;
