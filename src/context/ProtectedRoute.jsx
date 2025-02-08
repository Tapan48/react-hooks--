// protected route are used to protect the routes from unauthorized access
// this 

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./ContextProvider";

const ProtectedRoute = ({ children, roles }) => {
  const { user, authenticated } = useContext(AuthContext);
  console.log("user", user);
  console.log("roles", roles);
  console.log("authenticated", authenticated);
  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  if (!roles.includes(user)) {
    console.log("unauthorized");
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
