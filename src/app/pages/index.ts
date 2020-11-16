import { createSlice } from '@reduxjs/toolkit';

export enum PAGES {
  SOURCESELECTION, DESTINATIONSELECTION
}

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    current: PAGES.SOURCESELECTION
  },
  reducers: {
    setPageState(state, action) {

    },
    setCurrentPage(state, action) {
      const page = action.payload;
      state.current = page; 
    }
  }
});

export const { setPageState, setCurrentPage } = pagesSlice.actions;

export default pagesSlice.reducer;