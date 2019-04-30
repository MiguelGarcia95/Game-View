import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../layout/Navbar';
import PaginationOffset from '../layout/PaginationOffset';
import {getGames} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';
import {getCurrentPage, getLastPage, getOffset} from '../../utils/functions';

import './css/page.css';
import './css/games.css';

class Games extends React.Component {
  state = {
    searchTerm: ''
  }
  
  componentDidMount() {
    if (this.props.games.length === 0) {
      this.props.getGames(0);
    }
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSearchKeyDown = e => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.history.push(`/games/search/${e.target.value}`)
    }
  }

  scrollTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  displayGames = games => {
    return games.map(game => {
      return (
        <section className="display_result" key={game.id} >
          <section className="display_image"><img src={game.image.small_url} alt=""/></section>
          <Link to={`/games/game/${game.guid}`} ><p>{game.name}</p></Link>
        </section>
      )
    })
  }

  paginationClick = offset => {
    this.scrollTop();
    this.props.getGames(offset);
  }

  render() {
    const {history, games, offset, totalResults} = this.props;
    const lastPage = getLastPage(totalResults);
    const lastOffset = getOffset(totalResults);
    const page = getCurrentPage(offset);
    return (
      <Page className="page app">
        <Navbar history={history} />
        <div ref={node => this.pageTop = node}></div>
        <section className="header">
          <h1>Search For Games</h1>
          <input 
            name='searchTerm' type="text" placeholder='Search For Games' className="search_bar" 
            onChange={this.onChange}  onKeyDown={this.onSearchKeyDown} value={this.state.searchTerm}
          />
        </section>
        <section className="page_content">
          {this.displayGames(games)}
        </section>
        <PaginationOffset page={page} lastOffset={lastOffset} offset={offset} paginationClick={this.paginationClick} lastPage={lastPage} />
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games.games,
    totalResults: state.games.totalResults,
    offset: state.games.offset
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGames: offset => dispatch(getGames(offset))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
