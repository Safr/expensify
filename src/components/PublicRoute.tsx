import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import StoreState from '../types';

interface Props {
  isAuthenticated: boolean;
  component: React.ComponentType;
  exact?: boolean;
  path?: string;
}

export const PublicRoute: React.SFC<Props> = ({
  isAuthenticated,
  component: Component,
  ...rest,
}) => (
  <Route
    {...rest}
    // tslint:disable-next-line:jsx-no-lambda
    component={(props: any) =>
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state: StoreState) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
