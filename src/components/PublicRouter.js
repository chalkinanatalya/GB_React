import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({ restricted, ...routeProps }) => {
  const isAuth = useSelector((state) => state.profile.isAuth);
  return isAuth && restricted ? <Redirect to="/" /> : <Route {...routeProps} />;
};
