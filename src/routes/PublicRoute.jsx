import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";

export default function PublicRoute({ children }) {
  const location = useLocation();

  const { loading, user } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  if (user) {
    if (location.state) {
      return <Navigate to={location.state} />;
    }
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
