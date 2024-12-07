import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const { loading, user } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  if (!user) {
    return <Navigate to="/auth/login" state={location.pathname} />;
  } else {
    return children;
  }
}
