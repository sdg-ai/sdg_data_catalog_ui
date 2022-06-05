import { configureStore } from "@reduxjs/toolkit";

//TODO - Delete temp slice and replace with working slice as needed
import tempSlice from "./tempslice";

export const store = configureStore({
  reducer: { temp: tempSlice },
});
