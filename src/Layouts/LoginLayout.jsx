import NavBar from "../pages/Shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const LoginLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
