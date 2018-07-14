// import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import App, { history } from './components/App';
import { login, logout, startSetExpenses } from './actions/';
import store from './store';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import './theme/globalStyle';

import { firebase } from './firebase/firebase';

const rootEl = document.getElementById('root');
let hasRendered = false;

const renderApp = (Component: React.ComponentType<{}>) => {
  if (!hasRendered) {
    hasRendered = true;
    return render(
      <Provider store={store}>
        <AppContainer>
          <Component />
        </AppContainer>
      </Provider>,
      rootEl as HTMLDivElement,
    );
  }
};

// // if (module.hot) {
// //   module.hot.accept();
// // }
firebase.auth().onAuthStateChanged((user: any) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp(App);
    // store.dispatch(startSetExpenses()).then(() => renderApp(App));
    store.dispatch(startSetExpenses());
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp(App);
    history.push('/');
  }
});

if (module.hot) module.hot.accept(App, () => renderApp(App));
