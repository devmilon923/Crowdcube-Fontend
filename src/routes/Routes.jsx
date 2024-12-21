import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import AddNewCampaign from "../pages/AddNewCampaign";
import AllCampaign from "../pages/AllCampaign";
import CampaignDetails from "../pages/CampaignDetails";
import Home from "../pages/Home";
import MyCampaign from "../pages/MyCampaign";
import MyDonations from "../pages/MyDonations";
import NotFound404 from "../pages/NotFound404";
import UpdateCampaign from "../pages/UpdateCampaign";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound404 />,
    children: [
      {
        path: "/",

        element: <Home />,
      },
      {
        path: "/campaign/all",
        element: <AllCampaign />,
        loader: () => fetch(`${import.meta.env.VITE_apiUrl}/campaign/all`),
      },

      {
        path: "/campaign/me",
        element: (
          <PrivateRoute>
            <MyCampaign />
          </PrivateRoute>
        ),
      },
      {
        path: "/donations/me",

        element: (
          <PrivateRoute>
            <MyDonations />
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign/details/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_apiUrl}/campaign/${params.id}`),
        element: (
          <PrivateRoute>
            <CampaignDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign/update/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_apiUrl}/campaign/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateCampaign />
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
    ],
  },

  {
    path: "*",
    element: <NotFound404 />,
  },
]);
