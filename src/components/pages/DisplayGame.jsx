import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getGame} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';

import './css/page.css';

class Games extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Page className="page app">
        <Navbar />
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGame: guid => dispatch(getGame(guid))
  }
}

export default connect(null, mapDispatchToProps)(Games);