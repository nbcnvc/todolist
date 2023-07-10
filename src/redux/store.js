import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/rootSlice";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
