import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import HomeHeader from '../layout/HomeHeader';
import HomeResult from '../layout/HomeResult';
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';

import {getHomeGames,getHomeVideos, getHomeGameReleases} from '../../actions/gameActions';
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
    this.props.getHomeGameReleases();
    // setTimeout(() => {
    // }, 1000)
  }

  scrollDown = () => {
    this.pageDown.scrollIntoView({behavior: 'smooth'});
  }

  setCurrentVideo = video => this.setState({currentVideo: video});

  displayResults = (results, type) => {
    return results.map(result => {
      return <HomeResult result={result} type={type} key={result.id} />
    })
  }

  render() {
    const {homeGames, homeVideos, homeReleases} = this.props;
    const {currentVideo} = this.state;
    return (
      <HomePage className="home app">
        <Navbar />
        <HomeHeader games={homeReleases} pageDown={this.scrollDown} />
        <div ref={node => this.pageDown = node}></div>
        <section className="home_content">
          <Sidebar title='Videos' content={homeVideos} setCurrentVideo={this.setCurrentVideo} />
          <Content title='Upcoming Games' content={homeGames} />
        </section>
        {currentVideo && (
          <section className="video">
            <section className="video_background" onClick={() => this.setCurrentVideo(null)}></section>
            <section className="video_box">
              <embed src="https://www.giantbomb.com/videos/embed/14117/" type=""/>
            </section>
          </section>
        )}
      </HomePage>
    );
  }
}

const mapStateToProps = state => {
  return {
    homeGames: state.games.homeGames,
    homeVideos: state.games.homeVideos,
    homeReleases: state.games.homeReleases
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomeGames: () => dispatch(getHomeGames()),
    getHomeVideos: () => dispatch(getHomeVideos()),
    getHomeGameReleases: () => dispatch(getHomeGameReleases())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
