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

  render() {
    return (
      <Page className="page app">
        <Navbar />
        <section className="display_header">
          <section className="display_image"></section>
          <section className="display_content">
            <section className="name"></section>
            <section className="description"></section>
            <section className="platforms"></section>
            <section className="release_date"></section>
            <section className="genres"></section>
            <section className="themes"></section>
            <section className="score"></section>
            <section className="rating"></section>
          </section>
        </section>
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