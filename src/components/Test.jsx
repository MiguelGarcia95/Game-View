import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

import {slideInLeft, slideOutRight} from '../utils/pageTransitions';
import './App.css';

const OverflowPage = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  color: white;
  overflow: auto;
  
  h1 {
    font-weight: 300;
    color: white;
  }

  h2 {
    font-weight: 400;
  }
  p {
    font-size: 1rem;
    margin: 20px auto;
  }
`;

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
      <HomePageElm className="test">
        <Link to='/'>Home</Link>
      </HomePageElm>
    );
  }
}

export default Test;
