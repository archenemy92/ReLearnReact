import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "@reduxjs/toolkit";
import listSlice from "./ListSlice";
// імпортуйте редуктори вашого додатка

const rootReducer = combineReducers({
  // додайте редуктори вашого додатка
  listSlice
});

const store = configureStore({
  reducer: {
    listSlice,
  },
  // Якщо потрібно, додайте підтримку для Redux DevTools:
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
