import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../layout/Navbar';
import {getGames} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';

import './css/page.css';

class Games extends React.Component {
  componentDidMount() {
    if (this.props.games.length === 0) {
      this.props.getGames(0);
    }
  }

  displayGames = games => {
    return games.map(game => {
      return (
        <section className="display_result" key={game.id} >
          <section className="display_image"><img src={game.image.small_url} alt=""/></section>
          <Link to={`/games/game/${game.guid}`} >{game.name}</Link>
        </section>
      )
    })
  }

  render() {
    const {history, games} = this.props;
    console.log(games)
    return (
      <Page className="page app">
        <Navbar history={history} />
        <section className="header">
          <h1>Search For Games</h1>
          <input type="text" placeholder='Search For Games' className="search_bar"/>
        </section>
        <section className="page_content">
          {this.displayGames(games)}
        </section>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games.games
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGames: () => dispatch(getGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
