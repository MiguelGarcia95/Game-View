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
    }
  }

  render() {
    return (
      <Page className="page app">
        <Navbar />
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