import { useEffect } from "react";
import axios from "axios";

import { RouterProvider } from "react-router-dom";
import router from "./router";

const URL =
  "https://todolist-a15fc-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(URL);
      const data = res.data;
      return data;
    };

    fetchData();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
