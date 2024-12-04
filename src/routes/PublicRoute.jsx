import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";

export default function PublicRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  if (user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
