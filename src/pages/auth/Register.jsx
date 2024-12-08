import { Spinner } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import SocialLogin from "../../components/auth/SocialLogin";
import { AuthContext } from "../../contextApi/AuthContext";

export default function Register() {
  const [btnLoader, setloader] = useState(false);
  const { epcreate, update } = useContext(AuthContext);
  useEffect(() => {
    document.title = "Register | Crowdcube";
  }, []);
  const handleRegister = (e) => {
    setloader(true);
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    epcreate(email, password)
      .then(() => {
        update({ displayName: name, photoURL: url })
          .then(() => {
            setloader(false);
            toast.success("Account created");
          })
          .catch((err) => toast.error(err.code));
        setloader(false);
      })
      .catch((err) => {
        setloader(false);
        toast.error(err.code);
      });
  };

  //   handleGoogleLogin

  return (
    <div className="flex items-center justify-center  dark:bg-slate-900">
      <div className="card w-full max-w-md dark:bg-slate-900 border dark:border-slate-950 shadow-sm p-6 rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-white">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text dark:text-slate-400">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered dark:bg-slate-800 dark:text-slate-400 w-full"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text dark:text-slate-400">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered dark:bg-slate-800 dark:text-slate-400 w-full"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text dark:text-slate-400">Photo URL</span>
            </label>
            <input
              type="url"
              name="url"
              placeholder="Enter photo URL"
              className="input input-bordered dark:bg-slate-800 dark:text-slate-400 w-full"
            />
          </div>

          {/* Password Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text dark:text-slate-400">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered dark:bg-slate-800 dark:text-slate-400 w-full"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full dark:border-slate-700 bg-green-600 text-white font-semibold btn rounded-lg hover:bg-green-700 transition duration-300"
          >
            {btnLoader ? (
              <div className="flex items-center">
                <Spinner aria-label="Spinner button example" size="sm" />
              </div>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Social Logins */}
        <div className="divider">OR</div>
        <SocialLogin />
        {/* Redirect to Login */}
        <p className="text-center mt-4 dark:text-slate-400">
          Already have an account?{" "}
          <NavLink
            to="/auth/login"
            className="text-blue-500 hover:underline dark:text-slate-200"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}
