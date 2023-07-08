import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todosAction } from "../redux/slices/todosApiSlice";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const Todo = (props) => {
  const { todo } = props;

  const dispatch = useDispatch();

  const toggleCheckedHandler = () => {
    dispatch(todosAction.actionToggleIsCompleted(todo.id));
  };

  const deleteHandler = () => {
    const id = todo.id;
    dispatch(todosAction.actionDeleteTodo(id));
  };

  return (
    <Container>
      <input
        type="radio"
        checked={todo.isCompleted}
        onClick={toggleCheckedHandler}
      />
      <Link to={`/todos/${todo.id}`} state={{ todo: todo}}>
        <Body checked={todo.isCompleted}>{todo.body}</Body>
      </Link>
      <Button clickHandler={deleteHandler}>delete</Button>
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
