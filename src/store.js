import React from 'react'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './reducers'
import createLogger from 'redux-logger';
import { loadState, saveState } from './localStorage';

export function configureStore(history, initialState) {

  const persistedState = loadState();

  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  const store = createStore(
    reducer,
    persistedState || initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history),
        createLogger()
      ),
        window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  store.subscribe(() => {
    saveState(store.getState());
    // saveState({
      // conversations: store.getState().conversations,
      // users: store.getState().users
    // });
  });

  return store
}
