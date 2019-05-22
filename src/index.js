import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import About from './About'
import Navbar from './Navbar'

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/login' component={Login}/>
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
