import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import createHistory from 'history/createBrowserHistory';
import asyncComponent from '../components/AsyncComponent';
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage/ExpenseDashboardPage';
// import AddExpensePage from '../components/AddExpensePage/AddExpensePage';
// import EditExpensePage from '../components//EditExpensePage/EditExpensePage';
import LoginPage from './LoginPage/LoginPage';
import PublicRoute from './PublicRoute';
// import PrivateRoute from './PrivateRoute';
// Enabling code splitting in Webpack

const NotFoundPage = asyncComponent(() =>
import('./NotFoundPage/NotFoundPage').then(module => module.default));

// const LoginPage = asyncComponent(() =>
// import('./LoginPage/LoginPage').then(module => module.default));

const PrivateRoute = asyncComponent(() =>
import('./PrivateRoute').then(module => module.default));

// const PublicRoute = asyncComponent(() =>
// import('./PublicRoute').then(module => module.default));

const ExpenseDashboardPage = asyncComponent(() =>
import('./ExpenseDashboardPage/ExpenseDashboardPage').then(module => module.default));

const AddExpensePage = asyncComponent(() =>
import('./AddExpensePage/AddExpensePage').then(module => module.default));

const EditExpensePage = asyncComponent(() =>
import('./EditExpensePage/EditExpensePage').then(module => module.default));

export const history = createHistory();

const App = () => (
  <Router history={history}>
    <>
      <ReduxToastr
        timeOut={2000}
        newestOnTop={false}
        preventDuplicates
        position="bottom-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  </Router>
);

export default App;
