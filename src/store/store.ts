import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "@reduxjs/toolkit";
import listSlice from "./ListSlice";
import splitBill from "./SplitBillSlice";
import formsSlice from "./FormsSlice";
// імпортуйте редуктори вашого додатка

const rootReducer = combineReducers({
  // додайте редуктори вашого додатка
  listSlice,
  splitBill,
  formsSlice
});

const store = configureStore({
  reducer: rootReducer,
  // Якщо потрібно, додайте підтримку для Redux DevTools:
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
