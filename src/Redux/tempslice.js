import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const tempSlice = createSlice({
  name: "temp",
  initialState,
  reducers: {
    test: (state, action) => {
      state.value += 1;
    },
  },
});

export const { test } = tempSlice.actions;

export default tempSlice.reducer;
