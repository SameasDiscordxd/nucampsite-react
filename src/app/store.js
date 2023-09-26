import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {campsitesReducer} from '../features/campsites/campsitesSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
  },
});
