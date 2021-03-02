import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

    const loadingImg ="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg"

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () =><div className="spinner">
      <img src={loadingImg} alt="Loading..." />
    </div>,
    })}
    {...args}
  />
);

export default ProtectedRoute;