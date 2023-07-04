import { combineReducers } from "@reduxjs/toolkit";
import todosApiSlice from "./todosApiSlice";

const rootReducer = combineReducers({
  todosApi: todosApiSlice.reducer,
})

export default rootReducer;
