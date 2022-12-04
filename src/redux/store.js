import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./apiSlice";

export const store = configureStore({
  reducer: dataReducer,
});
