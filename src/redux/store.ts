import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;
