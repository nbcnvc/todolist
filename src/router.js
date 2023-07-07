import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/Main";
import TodoDetail from "./components/TodoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "todos/:id",
    element: <TodoDetail />,
  },
]);

export default router;
