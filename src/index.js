import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }
//
// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//       exact
//       /* add styling to Navlink */
//       style={link}
//       /* add prop for activeStyle */
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Home</NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >About</NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Login</NavLink>
//   </div>;


ReactDOM.render(
  (<Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
