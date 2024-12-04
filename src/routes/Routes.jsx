import { createBrowserRouter } from "react-router-dom";
import AllCampaign from "../components/AllCampaign";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PublicRoute from "./PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-campaign",
        element: <AllCampaign />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  // register
]);
