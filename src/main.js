import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
require('./main.scss');
import routes from './routes';
import {Router} from 'react-router';
import About from './components/About.jsx';
import {Route} from 'react-router';



ReactDOM.render( (
  <Router >
    <Route name="app" path="/" component={App} />
    <Route name="about" path="/about" component={About} />

  </Router>
), document.getElementById('container'));
