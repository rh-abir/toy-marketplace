import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import MyToy from "../pages/MyToy/MyToy";
import PrivateRoute from "./PrivateRoute";
import ToyUpdate from "../pages/ToyUpdate/ToyUpdate";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: '/toydetails/:id',
        element: <ToyDetails></ToyDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/toydetails/${params.id}`)
      },

      {
        path: '/mytoy',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
      },

      {
        path: '/toyupdate/:id',
        element: <ToyUpdate></ToyUpdate>
      },

      {
        path: '/blog',
        element: <Blog></Blog>
      },


    ],
  },
  // {
  //   path: '/',
  //   element: <LoginLayout></LoginLayout>,

  // },
]);

export default router;
