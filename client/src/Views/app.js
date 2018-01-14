import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Organization from './Organization';
import Person from './Person';
import './app.scss';
export default props =>
<Router>
  <div className="app">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/organization">Organizations</Link></li>
      <li><Link to="/person">Person</Link></li>
    </ul>

    <hr/>

    <Route exact path="/" component={Home}/>
    <Route path="/organization" component={Organization}/>
    <Route path="/person" component={Person}/>
  </div>
</Router>
