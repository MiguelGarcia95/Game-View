import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getGames} from '../../actions/gameActions';
import {getReviews} from '../../actions/reviewActions';
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
    this.props.getReviews();
    this.props.getGames();
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
    getGames: () => dispatch(getGames()),
    getReviews: () => dispatch(getReviews())
  }
}

export default connect(null, mapDispatchToProps)(Home);
