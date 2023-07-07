import { useEffect } from "react";

import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./redux/slices/todosApiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
