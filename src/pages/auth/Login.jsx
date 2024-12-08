import { Spinner } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import SocialLogin from "../../components/auth/SocialLogin";
import { AuthContext } from "../../contextApi/AuthContext";

export default function Login() {
  const [btnLoader, setloader] = useState(false);
  const { eplogin } = useContext(AuthContext);
  useEffect(() => {
    document.title = "Login | Crowdcube";
  }, []);
  const handleSubmit = (e) => {
    setloader(true);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    eplogin(email, password)
      .then(() => {
        setloader(false);
        toast.success("Success to login");
      })
      .catch((err) => {
        setloader(false);
        toast.error(err.code);
      });
  };
  return (
    <div className="flex items-center justify-center  dark:bg-slate-900">
      <div className="card w-full max-w-md bg-white dark:bg-slate-900 border dark:border-slate-950 shadow-sm p-6 rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-white">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text dark:text-slate-400">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input dark:bg-slate-800 dark:text-slate-400 input-bordered w-full"
              required
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
              className="input dark:bg-slate-800 dark:text-slate-400 input-bordered w-full"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full dark:border-slate-700 bg-green-600 text-white font-semibold btn rounded-lg hover:bg-green-700 transition duration-300"
          >
            {btnLoader ? (
              <div className="flex items-center">
                <Spinner aria-label="Spinner button example" size="sm" />
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Google Login */}
        <div className="divider  dark:text-slate-400">OR</div>
        <SocialLogin />

        {/* Redirect to Register */}
        <p className="text-center mt-4 dark:text-slate-400">
          Don't have an account?{" "}
          <NavLink
            to="/auth/register"
            className="text-blue-500 dark:text-slate-200 hover:underline"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
}
