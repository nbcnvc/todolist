import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todosAction } from "../redux/slices/todosApiSlice";

const Todo = (props) => {
  const dispatch = useDispatch();

  const { todo } = props;

  const toggleCheckedHandler = () => {
    dispatch(todosAction.actionToggleIsCompleted(todo.id));
  };

  return (
    <Container>
      <input
        type="radio"
        checked={todo.isCompleted}
        onClick={toggleCheckedHandler}
      />
      <Body checked={todo.isCompleted}>{todo.body}</Body>
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  display: flex;
`;

const Body = styled.span`
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  color: ${props => props.checked ? 'lightgray' : 'black'};
`;
