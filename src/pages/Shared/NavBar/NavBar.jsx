import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthPorviders";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  //   const { displayName, email, photoURL } = user;

  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="addtoy">Add Toy</Link>
        <Link to="mytoy">My Toy</Link>
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
    <div className="navbar bg-red-400 py-4">
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
        <a className="btn btn-ghost normal-case text-xl">
          sports-<span className="text-red-500 font-bold text-2xl">s</span>hop
        </a>
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
  );
};

export default NavBar;
