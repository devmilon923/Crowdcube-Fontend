import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";

export default function PrivateRoute() {

  const { loading, user } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  if (!user) {
    return <Navigate to="/auth/login" />;
  } else {
    return { children };
  }

}
