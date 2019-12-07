import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default function PublicOnlyRoute({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        TokenService.hasAuthToken() ? (
          <Redirect to={'/dashboard'} />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
}
