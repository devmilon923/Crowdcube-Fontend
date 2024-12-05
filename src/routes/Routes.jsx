import { createBrowserRouter } from "react-router-dom";
import AddNewCampaign from "../components/AddNewCampaign";
import AllCampaign from "../components/AllCampaign";
import CampaignDetails from "../components/CampaignDetails";
import MyCampaign from "../components/MyCampaign";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateRoute from "./PrivateRoute";
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
        path: "/campaign/all",
        loader: () => fetch(`${import.meta.env.VITE_apiUrl}/campaign/all`),
        element: <AllCampaign />,
      },
      {
        path: "/campaign/me",
        element: <MyCampaign />,
      },
      {
        path: "/campaign/details/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign/add",
        element: (
          <PrivateRoute>
            <AddNewCampaign />
          </PrivateRoute>
        ),
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
