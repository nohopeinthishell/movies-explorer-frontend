import React from "react";
import { Navigate } from "react-router-dom";

const LoggedRouteElement = ({ element: Component, ...props }) => {
  return !props.isLog ? <Component {...props} /> : <Navigate to="/movies" replace />;
};

export default LoggedRouteElement;
