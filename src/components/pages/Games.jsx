import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../layout/Navbar';
import PaginationOffset from '../layout/Pagination';
import {getGames} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';

import './css/page.css';
import './css/games.css';

class Games extends React.Component {
  componentDidMount() {
    if (this.props.games.length === 0) {
      this.props.getGames(0);
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

  getLastPage = () => Math.floor(this.props.totalResults/50) - 1;
  getCurrentPage = offset =>  offset === 0 ? 1 : Math.ceil(offset/50);
  getPage = (offset) => {
    if (offset === 0) {
      return 1;
    } else {
      return Math.floor(offset/50);
    }
  }

  paginationClick = (offset) => {
    const pageOffset = this.getPage(offset);
    this.scrollTop();
    this.props.getGames((pageOffset));
  }

  render() {
    const {history, games, offset} = this.props;
    console.log(Math.ceil(this.props.offset/50))
    console.log(this.getCurrentPage())
    const lastPage = this.getLastPage();
    const page = this.getCurrentPage(offset);
    return (
      <Page className="page app">
        <Navbar history={history} />
        <div ref={node => this.pageTop = node}></div>
        <section className="header">
          <h1>Search For Games</h1>
          <input type="text" placeholder='Search For Games' className="search_bar"/>
        </section>
        <section className="page_content">
          {this.displayGames(games)}
        </section>
        <PaginationOffset page={page} offset={offset} type={'games'} paginationClick={this.paginationClick} lastPage={lastPage} />
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
