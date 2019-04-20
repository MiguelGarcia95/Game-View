import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import Header from '../layout/Header';
import {getHomeGames,getHomeGameReleases, getHomePromos,getHomeVideos} from '../../actions/gameActions';
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
    this.props.getHomeGames();
    this.props.getHomeVideos();
    // this.props.getHomePromos();
    // this.props.getHomeGameReleases();
    // setTimeout(() => {
    // }, 1000)
  }

  displayResults = (results) => {
    return results.map(result => {
      const imageStyle = {
        backgroundImage: `url(${result.image.medium_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }
      return (
        <section key={result.id} className="content_result">
          <section className="image" style={imageStyle}></section>
          <section className="data">
            <section className="name"><p>{result.name}</p></section>
            <section className="description"><p>{result.deck ? result.deck : 'N/A'}</p></section>
            <section className="meta">
             <p>Expected: {result.expected_release_year}</p>
            </section>
          </section>
        </section>
      )
    })
  }

  displaySidebarResults = results => {
    return results.map(result => {
      const imageStyle = {
        backgroundImage: `url(${result.image.medium_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }
      return (
        <section className="sidebar_result" key={result.id}>
          <section className="image" style={imageStyle}></section>
          <section className="data">
            <section className="name"><p>{result.name}</p></section>
            <section className="description"></section>
            <section className="meta"></section>
          </section>
        </section>
      )
    })
  }

  render() {
    const {homeGames, homeVideos} = this.props;
    console.log(homeVideos)
    
    return (
      <HomePage className="home app">
        <Navbar />
        <Header />

        <section className="home_content">
          <section className="sidebar">
            <section className="title">
              <h1>Videos</h1>
            </section>
            {homeVideos.length > 0 && this.displaySidebarResults(homeVideos)}
          </section>

          <section className="upcoming_games content">
            <section className="title">
              <h1>Upcoming Games</h1>
            </section>
            <section className="content_results">
              {homeGames.length > 0 && this.displayResults(homeGames)}
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
    gameReleases: state.games.gameReleases,
    homeGames: state.games.homeGames,
    homePromos: state.games.homePromos,
    homeVideos: state.games.homeVideos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomeGames: () => dispatch(getHomeGames()),
    getHomeGameReleases: () => dispatch(getHomeGameReleases()),
    getHomeReviews: () => dispatch(getHomeReviews()),
    getHomePromos: () => dispatch(getHomePromos()),
    getHomeVideos: () => dispatch(getHomeVideos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
