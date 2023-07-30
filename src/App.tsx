import "./App.css";
import Login from "./Components/Login/login";
import Signup from "./Components/Signup";
import Header from "./Components/Header";
import Kanban from "./Components/kanban";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App=()=> {

  const login_routes = ["/login"]?.map(item => {
    return {
      path: item,
      element: <Login />
    }
  })
  const router = createBrowserRouter([
    ...login_routes,
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: <Kanban />
    }
  ]);
  return (
    <><Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
