import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthPorviders";
import { Link, NavLink } from "react-router-dom";

import logo from "../../../assets/img/logo/logo.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  //   const { displayName, email, photoURL } = user;

  const navLink = (
    <>
      <li className="font-bold">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="addtoy"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Add Toy
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="mytoy"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          My Toy
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="blog"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-base-200">
      <div className="navbar py-4 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-full h-[40px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              {/* user Profile div */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div title={user?.displayName} className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
              {/* user Profile div end */}
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn">LogIn</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
