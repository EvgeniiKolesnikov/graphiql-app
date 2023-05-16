import { configureStore } from '@reduxjs/toolkit';
import SignSlice from './slices/SignSlice';

const store = configureStore({
  reducer: {
    sign: SignSlice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;
