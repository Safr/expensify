import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header/Header';
import StoreState from '../types';

interface Props {
  isAuthenticated: boolean;
  component: React.ComponentType;
  exact?: boolean;
  path?: string;
}

export const PrivateRoute: React.SFC<Props> = ({
  isAuthenticated,
  component: Component,
  ...rest,
}) => (
  <Route
    {...rest}
    // tslint:disable-next-line:jsx-no-lambda
    component={(props: any) => (
      isAuthenticated ? (
        <>
          <Header />
          <Component {...props} />
        </>
      ) : (
        <Redirect to="/" />
      )
    )}
  />
);

const mapStateToProps = (state: StoreState) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
