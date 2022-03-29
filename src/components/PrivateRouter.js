import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = (routeProps) => {
  const isAuth = useSelector((state) => state.profile.isAuth);
  return isAuth ? <Route {...routeProps} /> : <Redirect to="signin" />;
};
