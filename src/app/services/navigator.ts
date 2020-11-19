import { createSlice } from '@reduxjs/toolkit';

const navigatorSlice = createSlice({
  name: 'navigator',
  initialState: {
    current: null,
  },
  reducers: {
    setCurrentPage(state, action) {
      const page = action.payload;
      state.current = page; 
    }
  }
});

export const { setCurrentPage } = navigatorSlice.actions;

export default navigatorSlice.reducer;