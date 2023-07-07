import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/Main";
import TodoPage from "./pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "todos/:id",
    element: <TodoPage />,
  },
]);

export default router;
