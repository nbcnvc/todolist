import { useLocation } from "react-router-dom";
import Button from "./ui/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, todosAction } from "../redux/slices/todosApiSlice";

const TodoDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const todo = location.state?.todo;

  const [isEditing, setIsEditing] = useState(false);
  const [todoStr, setTodoStr] = useState(todo.body)

  const changeIsEditingHandler = () => {
    setIsEditing(true);
  }

  const editTodoStrHandler = (e) => {
    setTodoStr(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const updated = {
      id: todo.id,
      body: todoStr,
    }
    dispatch(editTodo(updated))
    setIsEditing(false);
  }

  return (
    <>
      <span>{todo.id}</span>
      {isEditing ? (
        <>
          <input value={todoStr} onChange={editTodoStrHandler}/>
          <Button clickHandler={submitHandler}>submit</Button>
        </>
      ) : (
        <>
          <p>{todoStr}</p>
          <Button clickHandler={changeIsEditingHandler}>edit</Button>
        </>
      )}
    </>
  );
};

export default TodoDetail;
