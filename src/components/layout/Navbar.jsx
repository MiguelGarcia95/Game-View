import React from 'react';
import {NavLink} from 'react-router-dom';
import './css/navbar.css';

const Navbar = () => {
  return (
    <section className="navbar">
      <section className="brand"><p>G</p></section>
      <section className="nav">
        <NavLink className='nav-link home' activeClassName='active' to='/'>Home</NavLink>
        <NavLink className='nav-link games' activeClassName='active' to='/games'>Games</NavLink>
        <NavLink className='nav-link reviews' activeClassName='active' to='/reviews'>Reviews</NavLink>
        <NavLink className='nav-link franchises' activeClassName='active' to='/franchises'>Franchises</NavLink>
        <NavLink className='nav-link characters' activeClassName='active' to='/characters'>Characters</NavLink>
        <NavLink className='nav-link test' activeClassName='active' to='/test'>Test</NavLink>
      </section>
    </section>
  )
}

export default Navbar;