import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { AuthContext } from "../contextApi/AuthContext";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const { loading, user } = useContext(AuthContext);
  if (loading) return <LoadingScreen />;
  if (!user) {
    return <Navigate to="/auth/login" state={location.pathname} />;
  } else {
    return children;
  }
}
