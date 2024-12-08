import { Spinner } from "flowbite-react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contextApi/AuthContext";

export default function SocialLogin() {
  const [btnLoader, setloader] = useState(false);
  const { googleLogin, facebookLogin, githubLogin } = useContext(AuthContext);

  const handleGitHubLogin = () => {
    setloader(true);
    githubLogin()
      .then(() => {
        setloader(false);
        toast.success("Walcome back");
      })
      .catch((err) => {
        setloader(false);
        toast.error(err.code);
      });
  };

  const handleFacebookLogin = () => {
    setloader(true);

    facebookLogin()
      .then(() => {
        setloader(false);
        toast.success("Walcome back");
      })
      .catch((err) => {
        setloader(false);
        toast.error(err.code);
      });
  };
  const handleGoogleLogin = () => {
    setloader(true);

    googleLogin()
      .then(() => {
        setloader(false);
        toast.success("Walcome back");
      })
      .catch((err) => {
        setloader(false);
        toast.error(err.code);
      });
  };
  return (
    <div>
      <button
        onClick={handleGitHubLogin}
        className="btn hover:bg-gray-200 border dark:border-slate-950 dark:bg-slate-800 dark:text-slate-400 hover:text-gray-800 w-full flex items-center justify-center mb-2"
      >
        {btnLoader ? (
          <div>
            <Spinner aria-label="Spinner button example" size="sm" />
            <span className="pl-3">Loading...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {" "}
            <i className="fa-brands fa-github text-lg"></i>
            Login with GitHub
          </div>
        )}
      </button>
      <button
        onClick={handleFacebookLogin}
        className="btn hover:bg-gray-200 dark:border-slate-950 dark:bg-slate-800 dark:text-slate-400 border hover:text-gray-800 w-full flex items-center justify-center mb-2"
      >
        {btnLoader ? (
          <div>
            <Spinner aria-label="Spinner button example" size="sm" />
            <span className="pl-3">Loading...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {" "}
            <i className="fa-brands fa-facebook text-lg"></i>
            Login with Facebook
          </div>
        )}
      </button>
      <button
        onClick={handleGoogleLogin}
        className="btn hover:bg-gray-200 dark:border-slate-950 dark:bg-slate-800 dark:text-slate-400 border hover:text-gray-800 w-full flex items-center justify-center"
      >
        {btnLoader ? (
          <div>
            <Spinner aria-label="Spinner button example" size="sm" />
            <span className="pl-3">Loading...</span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            {" "}
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </div>
        )}
      </button>
    </div>
  );
}
