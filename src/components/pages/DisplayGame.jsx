import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

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

  displayMetaData = (data) => {
    return data.map(item => {
      return <span key={item.id} className="data_span">{item.name}</span>
    })
  }

  getDate = (original_date, expected_date) => {
    if (original_date) {
      return moment(original_date).format('LL');
    } else if (expected_date) {
      return moment(expected_date).format('LL');
    } else {
      return 'N/A';
    }
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
              <section className="content_container">
                <img className="image" src={game.image.small_url} alt={game.name}/>
                <section className="data">
                  <section className="name"><h1>{game.name}</h1></section>
                  <section className="description"><p>{game.deck}</p></section>
                  <section className="platforms">
                    <p className="title">Platforms: </p>
                    {game.platforms && this.displayMetaData(game.platforms)}
                  </section>
                  <section className="genres">
                    <p className="title">Genres: </p>
                    {game.genres && this.displayMetaData(game.genres)}
                  </section>
                  <section className="themes">
                    <p className="title">Themes: </p>
                    {game.themes && this.displayMetaData(game.themes)}
                  </section>
                  <section className="release_date">
                    <p className="title">Release Date: </p>
                    <p className='date'>{this.getDate(game.original_release_date, game.expected_release_year)}</p>
                  </section>
                </section>
              </section>
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