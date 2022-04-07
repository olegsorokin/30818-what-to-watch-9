import { createSlice } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../../constants/auth';
import { NameSpace } from '../../constants/name-space';
import { UserProcessState } from '../../types/state';

const initialState: UserProcessState = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.USER,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { requireAuthorization } = userProcess.actions;
