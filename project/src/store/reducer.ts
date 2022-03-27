import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  genre: '',
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase('', (state, action) => {})
})