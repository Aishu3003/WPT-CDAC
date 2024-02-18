import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export default store;

