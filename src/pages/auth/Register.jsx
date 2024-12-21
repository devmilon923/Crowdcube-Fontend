import { FileInput, Label, Spinner } from "flowbite-react";
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
  const handleRegister = async (e) => {
    setloader(true);
    e.preventDefault();
    const file = e.target.file.files;

    if (e.target.file.files.length <= 0) {
      setloader(false);

      return toast.error("Image file is require");
    }
    const data = new FormData();
    data.append("file", file[0]);
    data.append("upload_preset", "crowdcube");
    data.append("cloud_name", "dotcx4o6h");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dotcx4o6h/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const photourl = await response.json();

    const name = e.target.name.value;
    const url = photourl.url;
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
          {/* Photo URL Input */}
          <div className="form-control mb-4">
            <div className="flex w-full items-center justify-center">
              <Label
                htmlFor="dropzone-file"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <FileInput id="dropzone-file" name="file" className="hidden" />
              </Label>
            </div>
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
