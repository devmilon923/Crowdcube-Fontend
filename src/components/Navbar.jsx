import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/campaign/all"}>All Campaign</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/campaign/add"}>Add New Campaign</NavLink>
          </li>
          <li>
            <NavLink to={"/campaign/me"}>My Campaign</NavLink>
          </li>

          <li>
            <NavLink to={"/donations/me"}>My Donations</NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logout success"))
      .catch((err) => toast.error(err.code));
  };
  return (
    <div className="fixed w-full top-0 bg-gray-50 border">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn px-0 btn-ghost lg:hidden"
            >
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 gap-2 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="text-xl">
            DaisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <button onClick={handleLogout} className="btn btn-sm">
                Logout
              </button>
            </div>
          ) : (
            <div>
              <NavLink to={"/auth/login"} className="btn btn-sm">
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
