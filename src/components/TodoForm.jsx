import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "./ui/Button";
import { addTodo } from "../redux/slices/todosApiSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todoStr, setTodoStr] = useState("");

  const changeTodoStrHandler = (e) => {
    setTodoStr(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todoStr === "") {
      alert("내용을 입력해 주세요.");
      return;
    }
    if (todoStr.length < 10) {
      alert("내용은 최소 10글자 이상이어야 합니다.");
      return;
    }
    const newTodo = {
      body: todoStr,
      isCompleted: false,
    };

    dispatch(addTodo(newTodo));
    setTodoStr("");
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
