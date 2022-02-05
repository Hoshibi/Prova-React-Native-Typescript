import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  token: '',
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    getTokenPassword(state, action) {
      state.token = action.payload;
      console.log(state.token);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;