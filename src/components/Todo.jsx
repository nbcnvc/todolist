import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { deleteTodo, todosAction } from "../redux/slices/todosApiSlice";
import Button from "./ui/Button";
import { useState } from "react";
import { Backdrop, Modal } from "./Modal";

const Todo = (props) => {
  const { todo } = props;
  const [isOverlay, setIsOverlay] = useState(false);

  const dispatch = useDispatch();

  const toggleCheckedHandler = () => {
    dispatch(todosAction.actionToggleIsCompleted(todo.id));
  };

  const deleteHandler = () => {
    const id = todo.id;
    dispatch(deleteTodo(id));
  };

  const overlayHandler = () => {
    setIsOverlay(true);
  }

  return (
    <Container>
      <input
        type="radio"
        checked={todo.isCompleted}
        onClick={toggleCheckedHandler}
      />
        <Body onClick={overlayHandler} checked={todo.isCompleted}>{todo.body}</Body>
      <Button clickHandler={deleteHandler}>delete</Button>
      {isOverlay && <Modal />}
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  display: flex;
`;

const Body = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "lightgray" : "black")};
`;
