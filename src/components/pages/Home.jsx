import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import Header from '../layout/Header';
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

  displayResults = () => {
    return [1,2,3,4].map(result => {
      <section key={result} className="content_result">
        <section className="image"></section>
        <section className="data">
          <section className="name"></section>
          <section className="description"></section>
          <section className="meta"></section>
        </section>
      </section>
    })
  }

  render() {
    return (
      <HomePage className="home app">
        <Navbar />
        <Header />

        <section className="home_content">
          <section className="sidebar">
          </section>

          <section className="game_releases content">
            <section className="title">
              <h1>Game Releases</h1>
            </section>
            <section className="content_results">
              {this.displayResults()}
            </section>
            {/* <section><h1>helloooooooooooo</h1></section> */}
          </section>
          <section className="game_reviews content">
            <section className="title">
              <h1>Game Reviews</h1>
            </section>
            <section className="content_results">
              {this.displayResults()}
            </section>
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
