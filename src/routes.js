import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import History from './containers/History';
import Map from './containers/Map';
import Comparison from './containers/Comparison';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={History} />
    <Route path="/history" component={History} />
    <Route path="/map" component={Map} />
    <Route path="/comparison" component={Comparison} />
  </Route>
);
