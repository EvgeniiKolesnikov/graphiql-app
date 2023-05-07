import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootStore } from '../../redux/store';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isModalOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = true;
    },
  },
});

export const selectIsModalOpen = (state: RootStore) => state.auth.isModalOpen;

export const { openModal, closeModal } = AuthSlice.actions;

export default AuthSlice.reducer;
