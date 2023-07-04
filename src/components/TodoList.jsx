import { useSelector } from "react-redux";

import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todosApi.todos);

  return (
    <>
      <h2>nbcnvc's todo list</h2>
      <div>
        {todos.map((t) => (
          <Todo key={t.id} todo={t} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
