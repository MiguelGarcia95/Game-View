import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getHomeGames,getHomeGameReleases} from '../../actions/gameActions';
import {getHomeReviews} from '../../actions/reviewActions';
import {slideInLeft, slideOutRight} from '../../utils/pageTransitions';
import {OverflowPage} from '../../utils/styledClasses';

const HomePage = styled(OverflowPage)`
  &.page-enter {
    animation: ${slideInLeft} 0.7s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.7s ease forwards;
  }
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.getHomeReviews();
    this.props.getHomeGames();
    this.props.getHomeGameReleases();
    // setTimeout(() => {
    // }, 1000)
  }

  render() {
    return (
      <HomePage className="home app">
        <Navbar />
      </HomePage>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomeGames: () => dispatch(getHomeGames()),
    getHomeGameReleases: () => dispatch(getHomeGameReleases()),
    getHomeReviews: () => dispatch(getHomeReviews())
  }
}

export default connect(null, mapDispatchToProps)(Home);
