import { configureStore } from '@reduxjs/toolkit';
import { coffeeReducer } from '../features/coffees/coffeeSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    coffees: coffeeReducer
  },
});
