import React from 'react';
import ReactDOM from 'react-dom';

import {Route, Link, HashRouter as Router} from 'react-router-dom'

import {App} from './components/App';
import {About} from './components/About';
import {Checkout} from './components/Checkout';
import {Menu} from './components/Menu';


import './styles/reset.css';
import './styles/app.css';
import './styles/queries.css';

/**
React router allows for client side routing
*/
const routing = (
  <Router>
    <div className="fullHeight">
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/menu" component={Menu} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('app'));