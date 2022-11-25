import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useContext(AuthContext);
  console.log('auth: ', auth);
  let location = useLocation();
  console.log('location: ', location);

  if (!auth?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;