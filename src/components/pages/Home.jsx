import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

import Navbar from '../layout/Navbar';
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

class Home extends Component {
  render() {
    return (
      <HomePageElm className="home app">
        <Navbar />
      </HomePageElm>
    );
  }
}

export default Home;
