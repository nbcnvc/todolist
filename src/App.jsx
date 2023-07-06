import { useEffect } from "react";
import axios from "axios";

import TodoList from "./components/TodoList";

const URL =
  "https://todolist-a15fc-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(URL);
      const data = res.data;
      return data
    };

    fetchData();
  }, []);

  return <TodoList />;
}

export default App;
