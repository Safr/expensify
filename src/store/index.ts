import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import StoreState from '../types';
// import initialState from './initialState';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  // sagaMiddleware,
  thunk,
];
const middlewareEnhancer = applyMiddleware(...middlewares);
const storeEnhancers = [middlewareEnhancer];

const composedEnhancer = composeEnhancers(
  ...storeEnhancers,
);

const store = createStore<StoreState>(
  reducer,
  composedEnhancer,
);


// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk),
//     typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
//       ?
//       window.devToolsExtension()
//       :
//       f => f,
//   ),
// );

// const store = createStore(
//   reducer,
//   // initialState,
//   compose(typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
//     ?
//     window.devToolsExtension()
//     :
//     f => f),
// );

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const newRootReducer = require('../reducers').default;
      store.replaceReducer(newRootReducer);
    });
  }
}

export default store;


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default () => {
//   const store = createStore(
//     combineReducers({
//       reducer,
//     }),
//     composeEnhancers(applyMiddleware(thunk))
//   );

//   return store;
// };
