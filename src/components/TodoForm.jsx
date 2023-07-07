import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "./ui/Button";
import { todosAction } from "../redux/slices/todosApiSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todoStr, setTodoStr] = useState('')

  const changeTodoStrHandler = (e) => {
    setTodoStr(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      body: todoStr,
      isCompleted: false,
    }
    dispatch(todosAction.actionAddTodo(newTodo));
    setTodoStr('')
  };

  return (
    <form onSubmit={addTodoHandler}>
      <label htmlFor="todo">todo</label>
      <input
        type="text"
        id="todo"
        value={todoStr}
        onChange={changeTodoStrHandler}
      />
      <Button>submit</Button>
    </form>
  );
};

export default TodoForm;
