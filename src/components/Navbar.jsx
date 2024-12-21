import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
import { DataContext } from "../contextApi/DataContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(DataContext);
  const { user, logout } = useContext(AuthContext);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setDarkMode(true);
      document.body.classList.add("light");
    }
  }, []);

  // Toggle dark mode and store preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");

      // Apply dark mode to the body tag
      if (newMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }

      return newMode;
    });
  };
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
    <div className="fixed w-full z-50 top-0 bg-white  dark:bg-slate-900  dark:border-gray-700">
      <div className="navbar container mx-auto text-black  dark:text-white">
        <div className="navbar-start">
          <Link
            to={"/"}
            className="lg:text-2xl text-xl font-bold flex gap-2 items-center"
          >
            <img className="w-12 h-12 object-cover" src="/zakat.png" alt="" />
            <p className="mt-3 text-slate-800 dark:text-white">Crowdcube</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <button
            onClick={toggleDarkMode}
            className="block p-2 rounded-full hover:text-gray-600 justify-center items-center transition"
          >
            {/* Change icon depending on the darkMode state */}
            <i
              className={darkMode ? "fa-solid fa-moon" : "fa-regular fa-sun"}
            ></i>
          </button>
          {user ? (
            <div title={user?.displayName} className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu gap-2 px-2 dark:bg-slate-900 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">{user?.displayName}</a>
                </li>
                <li>
                  <a>{user?.email}</a>
                </li>
                <li className="bg-red-500 text-white rounded-lg">
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to={"/auth/login"} className="btn btn-sm ">
                Get start
              </Link>
            </div>
          )}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn px-0 btn-ghost lg:hidden"
            >
              <i className="fa-solid fa-bars text-xl text-slate-800 dark:text-white"></i>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm left-[-200px] justify-start dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 gap-2 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
