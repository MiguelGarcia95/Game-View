import React from 'react';
import {NavLink} from 'react-router-dom';
import './css/navbar.css';

const Navbar = () => {
  return (
    <section className="navbar">
      <section className="brand"><p>G</p></section>
      <section className="nav">
        <NavLink activeClassName='active' to='/'>Home</NavLink>
        <NavLink activeClassName='active' to='/games'>Games</NavLink>
        <NavLink activeClassName='active' to='/test'>Test</NavLink>
      </section>
    </section>
  )
}

export default Navbar;