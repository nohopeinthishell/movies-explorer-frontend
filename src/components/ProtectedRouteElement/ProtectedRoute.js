import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  console.log(props.isLog);
  return props.isLog ? <Component {...props} /> : <Navigate to="/" replace />;
};

export default ProtectedRouteElement;
