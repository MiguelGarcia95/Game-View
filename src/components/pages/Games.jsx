import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getHomeGames} from '../../actions/gameActions';
import {slideInLeft, slideOutRight} from '../../utils/pageTransitions';
import {Page} from '../../utils/styledClasses';

class Games extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Page className="games app">
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
