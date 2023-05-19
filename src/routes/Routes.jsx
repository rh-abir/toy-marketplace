import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import AddToy from "../pages/AddToy/AddToy";

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
      {
        path: 'addtoy',
        element: <AddToy></AddToy>        
      }
    ],
  },
  // {
  //   path: '/',
  //   element: <LoginLayout></LoginLayout>,

  // },
]);

export default router;
