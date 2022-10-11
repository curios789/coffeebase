import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coffeeReducer } from '../features/coffees/coffeeSlice';
import counterReducer from '../features/counter/counterSlice';
import { commentReducer } from '../features/comments/commentSlice';
import { shopsReducer } from '../features/shops/shopSlice';
import { userReducer } from '../features/users/userSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistCombineReducers,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  counter: counterReducer,
  coffees: coffeeReducer,
  comments: commentReducer,
  shops: shopsReducer,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});
export const persistor = persistStore(store)
