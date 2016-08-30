import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore } from './store';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

let state = window.__initialState__ || undefined
const store = configureStore(browserHistory, state)
const history = syncHistoryWithStore(browserHistory, store)

injectTapEventPlugin();

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
