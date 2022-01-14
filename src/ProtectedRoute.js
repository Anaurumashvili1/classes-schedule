import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import { useState } from "react";

const cookies = new Cookies();

const ProtectedRoute = ({
  isAuth: isAuth,
  isRole: isRole,

  component: Component,
  ...rest
}) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (isAuth && isRole) {
            return <Component />;
          }
        }}
      />
    </>
  );
};

export default ProtectedRoute;
