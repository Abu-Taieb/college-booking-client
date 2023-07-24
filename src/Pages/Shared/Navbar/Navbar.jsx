import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"college"}>COLLEGE</Link>
      </li>
      <li>
        <Link to={"admission"}>ADMISSION</Link>
      </li>
      <li>
        <Link to={"myCollege"}>MY COLLEGE</Link>
      </li>
      <li>
        <Link to={"contact"}>CONTRACT</Link>
      </li>
    </>
  );

  return (
    <div className="bg-light border-b-2 border-accent">
      <div className="navbar w-11/12 m-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-2xl">TGA COLLEGE</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{navOptions}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              {user ? (
                <>
                  <h4>{user.email}</h4>
                  <button className="btn btn-sm btn-accent">LogOut</button>
                </>
              ) : (
                <button className="btn btn-accent">LogOut</button>
              )}
            </>
          ) : (
            <>
              <Link to={"signIn"} className="btn btn-accent">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
