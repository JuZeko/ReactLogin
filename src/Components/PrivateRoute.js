import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import Auth from '../Auth'

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ props }) =>
        Auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/404",
              state: { from: props }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;