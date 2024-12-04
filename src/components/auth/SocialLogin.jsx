import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contextApi/AuthContext";

export default function SocialLogin() {
  const { googleLogin, facebookLogin, githubLogin } = useContext(AuthContext);

  const handleGitHubLogin = () => {
    githubLogin()
      .then(() => toast.success("Github login success"))
      .catch((err) => toast.error(err.code));
  };

  const handleFacebookLogin = () => {
    facebookLogin()
      .then(() => toast.success("Facebook login success"))
      .catch((err) => toast.error(err.code));
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => toast.success("Google login success"))
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <button
        onClick={handleGitHubLogin}
        className="btn hover:bg-gray-200 border hover:text-gray-800 w-full flex items-center justify-center mb-2"
      >
        <i className="fa-brands fa-github text-lg"></i>
        Login with GitHub
      </button>
      <button
        onClick={handleFacebookLogin}
        className="btn hover:bg-gray-200 border hover:text-gray-800 w-full flex items-center justify-center mb-2"
      >
        <i className="fa-brands fa-facebook text-lg"></i>
        Login with Facebook
      </button>
      <button
        onClick={handleGoogleLogin}
        className="btn hover:bg-gray-200 border hover:text-gray-800 w-full flex items-center justify-center"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Login with Google
      </button>
    </div>
  );
}
