import React from 'react';
import {Route, Router, IndexRoute, NotFoundRoute, Redirect} from 'react-router';
import App from './components/App.jsx';
import About from './components/About.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';


export default (
<Router history={createBrowserHistory()}>
  <Route name="app" path="/" handler={App} >
    <IndexRoute handler={About} />
    <Route name="/about" handler={About} />
  </Route>
</Router>
);
