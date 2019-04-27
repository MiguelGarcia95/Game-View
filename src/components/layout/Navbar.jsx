import React from 'react';
// import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import classnames from 'classnames';

// import {search} from '../../actions/gameActions';

import './css/navbar.css';

class Navbar extends React.Component {
  state = {
    mobile: false,
    search: false,
    menu: false,
    searchTerm: ''
  }

  toggleSearch = () => this.setState({search: !this.state.search});
  toggleMenu = () => this.setState({menu: !this.state.menu});

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSearchKeyDown = e => {
    if (e.keyCode === 13) {
      // console.log('Enter clicked')
      this.props.history.push(`/search/${e.target.value}`)
      // console.log(this.props)
    }
  }


  render() {
    const {search, menu} = this.state;
    return (
      <React.Fragment>
        <section className="navbar">
          <NavLink className='nav-link brand' to='/'>G</NavLink>
          <NavLink className='nav-link home' activeClassName='active' exact to='/'>Home</NavLink>
          <NavLink className='nav-link games' activeClassName='active' to='/games'>Games</NavLink>
          <NavLink className='nav-link reviews' activeClassName='active' to='/reviews'>Reviews</NavLink>
          <NavLink className='nav-link franchises' activeClassName='active' to='/franchises'>Franchises</NavLink>
          <NavLink className='nav-link characters' activeClassName='active' to='/characters'>Characters</NavLink>
          <section className={classnames('nav-ham', {active: menu})} onClick={this.toggleMenu} >
            <i className="fas fa-bars fa-2x"></i>
          </section>
          <section className={classnames('nav-search', {active: search})} onClick={this.toggleSearch} >
            <i className="fas fa-search fa-lg"></i>
          </section>
        </section>
        <section className={classnames('searchbar', {active: search})} >
          <input type="text" name='searchTerm' placeholder='search' onChange={this.onChange} onKeyDown={this.onSearchKeyDown} value={this.state.searchTerm} />
        </section>
        <section className={classnames('nav-box', {active: menu})}>
          <section className="screen"></section>
        </section>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     search: query => dispatch(search(query)) 
//   }
// }

export default Navbar;
// export default connect(null, mapDispatchToProps)(Navbar);