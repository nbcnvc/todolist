import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL =
  "https://todolist-a15fc-default-rtdb.asia-southeast1.firebasedatabase.app";

const NAMESPACE = "todosApi";

const initialState = {
  todos: [],
};

const todosApiSlice = createSlice({
  name: NAMESPACE,
  initialState: initialState,
  reducers: {
    actionFetchData(state, action) {
      const fetchedTodos = action.payload;
      state.todos = fetchedTodos;
    },
    actionToggleIsCompleted(state, action) {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      todo.isCompleted = !todo.isCompleted;
    },
    actionAddTodo(state, action) {
      const todo = action.payload;
      state.todos.push(todo);
    },
    actionDeleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    actionEditTodo(state, action) {
      const { id, body } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      todo.body = body;
    },
  },
});

export const fetchTodos = () => {
  return async (dispatch) => {
    const res = await axios.get(URL + "/todos.json");
    if (!res.data) return;
    const arrayData = Object.keys(res.data).map((key) => ({
      id: key,
      ...res.data[key],
    }));

    dispatch(todosAction.actionFetchData(arrayData));
  };
};

export const addTodo = (newTodo) => {
  return async (dispatch) => {
    const res = await axios.post(URL + "/todos.json", newTodo);

    newTodo.id = res.data.name;
    dispatch(todosAction.actionAddTodo(newTodo));
  };
};

export const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await axios.delete(URL + `/todos/${todoId}.json`);

    dispatch(todosAction.actionDeleteTodo(todoId));
  };
};

export const editTodo = (payload) => {
  const { id, body } = payload;
  return async (dispatch) => {
    const data = {
      body,
    };
    await axios.patch(URL + `/todos/${id}.json`, data);
    dispatch(todosAction.actionEditTodo({ id, body }));
  };
};

export default todosApiSlice;
export const todosAction = todosApiSlice.actions;
