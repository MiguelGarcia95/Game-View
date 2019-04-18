import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getHomeGames,getHomeGameReleases} from '../../actions/gameActions';
import {getHomeReviews} from '../../actions/reviewActions';
import {slideInLeft, slideOutRight} from '../../utils/pageTransitions';
import {OverflowPage} from '../../utils/styledClasses';

import './css/home.css';

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
    // this.props.getHomeReviews();
    // this.props.getHomeGames();
    // this.props.getHomeGameReleases();
    // setTimeout(() => {
    // }, 1000)
  }

  closeColumns = () => {
    const header = document.querySelectorAll('.home_header_col');
    header.forEach(head => {
      head.classList.remove('active');
    })
  }

  expandColumn = col => {
    const column = document.querySelector(`.${col}`);
    const header = document.querySelector('.home_header');
    if (column.className.includes('active')) {
      header.classList.remove('selected');
      column.classList.remove('active');
    } else {
      this.closeColumns();
      header.classList.add('selected');
      column.classList.toggle('active');
    }
  }

  render() {
    return (
      <HomePage className="home app">
        <Navbar />
        <section className="home_header">
          <section className="home_header_col one" onClick={() => this.expandColumn('one')}>
          </section>
          <section className="home_header_col two" onClick={() => this.expandColumn('two')}>
          </section>
          <section className="home_header_col three" onClick={() => this.expandColumn('three')}>
          </section>
          <section className="home_header_col four" onClick={() => this.expandColumn('four')}>
          </section>
          <section className="home_header_col five" onClick={() => this.expandColumn('five')}>
          </section>
        </section>
        <section className="home_content">
          <section className="games">
            <h1>Game Releases</h1>
          </section>
          <section className="reviews">
            <h1>Game Reviews</h1>
          
          </section>
        </section>
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
