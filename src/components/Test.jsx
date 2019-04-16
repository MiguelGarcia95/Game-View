import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

import {slideInLeft, slideOutRight} from '../utils/pageTransitions';
import {OverflowPage} from '../utils/styledClasses';

const HomePageElm = styled(OverflowPage)`
  &.page-enter {
    animation: ${slideInLeft} 0.7s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.7s ease forwards;
  }
`;

class Test extends Component {
  render() {
    return (
      <HomePageElm className="test app">
        <Link to='/'>Home</Link>
      </HomePageElm>
    );
  }
}

export default Test;
