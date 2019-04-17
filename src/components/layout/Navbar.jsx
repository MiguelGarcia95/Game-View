import React from 'react';
import {NavLink} from 'react-router-dom';
import './css/navbar.css';

class Navbar extends React.Component {
  state = {
    mobile: false,
    search: false,
    menu: false
  }

  toggleSearch = () => this.setState({search: !this.state.search});
  toggleMenu = () => this.setState({menu: !this.state.menu});

  searchBar = () => {
    return (
      <section className="searchbar">
       <input type="text" placeholder='search'/>
      </section>
    )
  }

  render() {
    const {search} = this.state;
    return (
      <React.Fragment>
        <section className="navbar">
          <NavLink className='nav-link brand' to='/'>G</NavLink>
          <NavLink className='nav-link home' activeClassName='active' exact to='/'>Home</NavLink>
          <NavLink className='nav-link games' activeClassName='active' to='/games'>Games</NavLink>
          <NavLink className='nav-link reviews' activeClassName='active' to='/reviews'>Reviews</NavLink>
          <NavLink className='nav-link franchises' activeClassName='active' to='/franchises'>Franchises</NavLink>
          <NavLink className='nav-link characters' activeClassName='active' to='/characters'>Characters</NavLink>
          <section className='nav-ham' onClick={this.toggleMenu} ><i className="fas fa-bars fa-2x"></i></section>
          <section className={`nav-search ${search ? 'active' : ''}`} onClick={this.toggleSearch} ><i className="fas fa-search fa-lg"></i></section>
        </section>
        {search && this.searchBar()}
      </React.Fragment>
    )
  }
}

export default Navbar;