import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getGame} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';

import './css/page.css';

class Games extends React.Component {
  componentDidMount() {
    if (!this.props.game) {
      this.props.getGame(this.props.match.params.guid);
    } else if (this.props.game.guid !== this.props.match.params.guid) {
      this.props.getGame(this.props.match.params.guid);
    }
  }

  displayGenres = () => {

  }

  displayPlatforms = () => {

  }

  displayThemes = () => {

  }

  render() {
    const {game} = this.props;
    let imageStyle;
    if (game) {
      imageStyle = {
        backgroundImage: `url(${game.image.screen_large_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }
    }
    return (
      <Page className="page app">
        <Navbar />
        {game && (
          <section className="display_header">
            <section className="display_image" style={imageStyle}></section>
            <section className="display_content">
              <section className="image"></section>
              <section className="name"><h1>{game.name}</h1></section>
              <section className="description"><p>{game.deck}</p></section>
              <section className="platforms"></section>
              <section className="release_date">{game.original_release_date ? game.original_release_date : game.expected_release_year}</section>
              <section className="genres"></section>
              <section className="themes"></section>
              <section className="rating"></section>
            </section>
          </section>
        )}
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    game: state.games.game,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGame: guid => dispatch(getGame(guid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);