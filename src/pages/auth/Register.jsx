import React, { useContext } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import SocialLogin from "../../components/auth/SocialLogin";
import { AuthContext } from "../../contextApi/AuthContext";

export default function Register() {
  const { epcreate } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    epcreate(email, password)
      .then()
      .catch((err) => toast.error(err.code));
  };

  //   handleGoogleLogin

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-md bg-white shadow-md p-6 rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="url"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Register Button */}
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        {/* Social Logins */}
        <div className="divider">OR</div>
        <SocialLogin />
        {/* Redirect to Login */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <NavLink to="/auth/login" className="text-blue-500 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}
