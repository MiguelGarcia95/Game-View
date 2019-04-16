import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="navbar">
      <section className="brand"></section>
      <section className="nav">
        <NavLink activeClassName='active' to='/'>Home</NavLink>
      </section>
    </section>
  )
}

export default Navbar;