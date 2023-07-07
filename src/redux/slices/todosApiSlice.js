import { createSlice } from "@reduxjs/toolkit";

const NAMESPACE = "todosApi";

const initialState = {
  todos: [{
    id: 1,
    body: 'haha hoho',
    isCompleted: false,
  }],
};

const todosApiSlice = createSlice({
  name: NAMESPACE,
  initialState: initialState,
  reducers: {
    actionToggleIsCompleted(state, action) {
      const id = action.payload;
      const todo = state.todos.find(todo => todo.id === id)
      todo.isCompleted = !todo.isCompleted
    },
    actionAddTodo(state, action) {
      const todo = action.payload;
      state.todos = [...state.todos, todo]
    },
    actionDeleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id)
    }
  },
});

export default todosApiSlice;
export const todosAction = todosApiSlice.actions;

