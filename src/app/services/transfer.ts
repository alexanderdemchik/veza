import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TransferOptionsState {
  source?: string,
  destination?: string
}

const initialState: TransferOptionsState = {
  source: undefined,
  destination: undefined
}

const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    setSource: (state, action: PayloadAction<string>) => {
      state.source = action.payload;
    },
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    }
  }
});

export const { setSource, setDestination } = transferSlice.actions;

export default transferSlice.reducer;