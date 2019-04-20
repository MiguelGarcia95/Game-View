import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import HomeHeader from '../layout/HomeHeader';
import HomeResult from '../layout/HomeResult';

import {getHomeGames,getHomeVideos, getHomePromos,getHomeGameReleases} from '../../actions/gameActions';
import {slideInLeft, slideOutRight} from '../../utils/pageTransitions';
import {OverflowPage} from '../../utils/styledClasses';

import './css/home.css';
import { throws } from 'assert';

const HomePage = styled(OverflowPage)`
  &.page-enter {
    animation: ${slideInLeft} 0.7s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.7s ease forwards;
  }
`;

class Home extends React.Component {
  state = {
    currentVideo: null
  }

  componentDidMount() {
    if (this.props.homeGames.length === 0) {
      this.props.getHomeGames();
    }
    if (this.props.homeVideos.length === 0) {
      this.props.getHomeVideos();
    }
    // this.props.getHomePromos();
    this.props.getHomeGameReleases();
    // setTimeout(() => {
    // }, 1000)
  }

  displayResults = (results, type) => {
    return results.map(result => {
      return <HomeResult result={result} type={type} key={result.id} />
    })
  }

  render() {
    const {homeGames, homeVideos} = this.props;
    console.log(homeVideos)
    
    return (
      <HomePage className="home app">
        <Navbar />
        <HomeHeader />

        <section className="home_content">
          <section className="sidebar">
            <section className="title">
              <h1>Videos</h1>
            </section>
            {homeVideos.length > 0 && this.displayResults(homeVideos, 'sidebar')}
          </section>

          <section className="upcoming_games content">
            <section className="title">
              <h1>Upcoming Games</h1>
            </section>
            <section className="content_results">
              {homeGames.length > 0 && this.displayResults(homeGames, 'content')}
            </section>
          </section>
          <section className="game_reviews content">
            <section className="title">
              <h1>Game Reviews</h1>
            </section>
            <section className="content_results">
              {/* {this.displayResults()} */}
            </section>
          </section>
        </section>
      </HomePage>
    );
  }
}

const mapStateToProps = state => {
  return {
    homeGames: state.games.homeGames,
    homeVideos: state.games.homeVideos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomeGames: () => dispatch(getHomeGames()),
    getHomeVideos: () => dispatch(getHomeVideos()),
    getHomePromos: () => dispatch(getHomePromos()),
    getHomeGameReleases: () => dispatch(getHomeGameReleases())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
