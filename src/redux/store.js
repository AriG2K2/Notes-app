import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './features/modal/modalSlice';
import notesSlice from './features/notes/notesSlice';

export const store = configureStore({
  reducer: {
    notes : notesSlice,
    modal : modalSlice,
  },
})