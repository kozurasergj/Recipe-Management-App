import { configureStore } from '@reduxjs/toolkit';
import useReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: useReducer
  }
})

export type DispathType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
