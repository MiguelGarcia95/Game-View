import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../layout/Navbar';
import PaginationOffset from '../layout/PaginationOffset';
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

  getLastPage = () => Math.ceil(this.props.totalResults/50);
  getCurrentPage = offset =>  Math.ceil(offset/50) + 1;

  getOffset = totalResults => {
    return totalResults - totalResults%50;
  }

  paginationClick = offset => {
    console.log(offset)
    this.scrollTop();
    this.props.getGames(offset);
  }

  render() {
    const {history, games, offset, totalResults} = this.props;
    const lastPage = this.getLastPage();
    const lastOffset = this.getOffset(totalResults);
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
