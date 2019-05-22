import React from 'react'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const style = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => {

    return (
      <div>
      <NavLink to='/'
        style={style}
        activeStyle={{background: 'darkblue'}}
        exact
      >Home</NavLink>
      <NavLink to='/login'
        style={style}
        activeStyle={{background: 'darkblue'}}
      >Login</NavLink>
      <NavLink to='/about'
        style={style}
        activeStyle={{background: 'darkblue'}}
      >About</NavLink>
      </div>
    )

}

export default Navbar
