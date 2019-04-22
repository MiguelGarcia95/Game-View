import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getHomeGames} from '../../actions/gameActions';
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
    getHomeGames: () => dispatch(getHomeGames())
  }
}

export default connect(null, mapDispatchToProps)(Games);