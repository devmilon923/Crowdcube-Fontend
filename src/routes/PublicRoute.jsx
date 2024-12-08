import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { AuthContext } from "../contextApi/AuthContext";

export default function PublicRoute({ children }) {
  const location = useLocation();

  const { loading, user } = useContext(AuthContext);
  if (loading) return <LoadingScreen />;
  if (user) {
    if (location.state) {
      return <Navigate to={location.state} />;
    }
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
