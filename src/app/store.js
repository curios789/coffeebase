import { configureStore } from '@reduxjs/toolkit';
import { coffeeReducer } from '../features/coffees/coffeeSlice';
import counterReducer from '../features/counter/counterSlice';
import { commentReducer } from '../features/comments/commentSlice';
import { shopsReducer } from '../features/shops/shopSlice';
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    coffees: coffeeReducer,
    comments: commentReducer,
    shops: shopsReducer
  },
});
