import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../../components/auth/SocialLogin";
import { AuthContext } from "../../contextApi/AuthContext";

export default function Login() {
  const { eplogin } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    eplogin(email, password)
      .then(() => toast.success("EP account login success"))
      .catch((err) => toast.error(err.code));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="card w-full max-w-md bg-white shadow-md p-6 rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
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

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        {/* Google Login */}
        <div className="divider">OR</div>
        <SocialLogin />

        {/* Redirect to Register */}
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <a href="/auth/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
