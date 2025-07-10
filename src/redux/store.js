import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// Подписка на изменения — сохраняем в localStorage
store.subscribe(() => {
  const { items } = store.getState().todos;
  localStorage.setItem('todos', JSON.stringify(items));
});
