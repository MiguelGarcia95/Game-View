import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getFeed} from '../../actions/gameActions';
import {slideInLeft, slideOutRight} from '../../utils/pageTransitions';
import {OverflowPage} from '../../utils/styledClasses';

const HomePageElm = styled(OverflowPage)`
  &.page-enter {
    animation: ${slideInLeft} 0.7s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.7s ease forwards;
  }
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.getFeed()
  }

  render() {
    return (
      <HomePageElm className="home app">
        <Navbar />
      </HomePageElm>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFeed: () => dispatch(getFeed())
  }
}

export default connect(null, mapDispatchToProps)(Home);
