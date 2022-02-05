import { createSlice } from '@reduxjs/toolkit';

const initialGameState = {
};

const gameSlice = createSlice({
  name: 'gameControl',
  initialState: initialGameState,
  reducers: {
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;