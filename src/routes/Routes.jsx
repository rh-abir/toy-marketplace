import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>This is error page</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Register></Register>,
      },
    ],
  },
  // {
  //   path: '/',
  //   element: <LoginLayout></LoginLayout>,

  // },
]);

export default router;
