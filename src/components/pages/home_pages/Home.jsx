import React from 'react';
import {connect} from 'react-redux';
import {Page} from '../../../utils/styledClasses';

import Navbar from '../../layout/Navbar';
import HomeHeader from '../../layout/header/HomeHeader';
import HomeResult from '../../layout/HomeResult';
import Sidebar from '../../layout/Sidebar';
import VideoPlayer from '../../layout/VideoPlayer';
import Content from '../../layout/Content';

import {getHomeGames, getHomeGameReleases} from '../../../actions/gameActions';
import {getHomeVideos} from '../../../actions/videosActions';

import '../css/page.css';
import '../css/front_page.css';

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
    const {history, homeGames, homeVideos, homeReleases} = this.props;
    const {currentVideo} = this.state;
    return (
      <Page className="page app">
        <Navbar history={history} />
        <HomeHeader games={homeReleases} pageDown={this.scrollDown} />
        <div ref={node => this.pageDown = node}></div>
        <section className="page_content">
          <Sidebar title='Videos' content={homeVideos} setCurrentVideo={this.setCurrentVideo} />
          <Content title='Upcoming Games' content={homeGames} />
        </section>
        {currentVideo && <VideoPlayer currentVideo={currentVideo} setCurrentVideo={this.setCurrentVideo} /> }
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    homeGames: state.games.homeGames,
    homeReleases: state.games.homeReleases,
    homeVideos: state.videos.homeVideos
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
