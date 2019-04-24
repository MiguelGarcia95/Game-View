import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Navbar from '../layout/Navbar';
import DisplayHeader from '../layout/DisplayHeader';
import {getGame} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';

import './css/page.css';

class Games extends React.Component {
  componentDidMount() {
    if (!this.props.game) {
      this.props.getGame(this.props.match.params.guid);
    } else if (this.props.game.guid !== this.props.match.params.guid) {
      this.props.getGame(this.props.match.params.guid);
    }
  }

  scrollDown = () => {
    this.pageDown.scrollIntoView({behavior: 'smooth'});
  }

  sortPlatforms = (platforms, allPlatforms) => {
    return  platforms.reduce((sortedPlatforms, platform) => {
      allPlatforms.some(pForm => {
        if (pForm.id === platform.id) {
          sortedPlatforms.push(pForm);
        }
      });
      return sortedPlatforms;
    }, []);
  }

  render() {
    const {game} = this.props;
    let imageStyle; 
    if (game) {
      imageStyle = {
        backgroundImage: `url(${game.image.screen_large_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }
    }
    return (
      <Page className="page app">
        <Navbar />
        {game && (
          <React.Fragment>
            {/* <DisplayHeader game={game} scrollDown={this.scrollDown} /> */}
            <section className="display_header_2" style={imageStyle}>
              <section className="display_cover"></section>
              <section className="display_box">
                <section className="display_top">
                  <section className="image"></section>
                  <section className="about"></section>
                </section>
                <section className="row">
                  <section className="row_item name"></section>
                </section>
                <section className="row">
                  <section className="row_item platforms"></section>
                </section>
                <section className="row">
                  <section className="row_item genres"></section>
                </section>
                <section className="row">
                  <section className="row_item themes"></section>
                </section>
                <section className="row">
                  <section className="row_item date"></section>
                </section>
              </section>
            </section>


            <div ref={node => this.pageDown = node}></div>
            <section className="page_content game">
              <section className="images"></section>
              <section className="about"></section>
            </section>
          </React.Fragment>
        )}
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    game: state.games.game
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGame: guid => dispatch(getGame(guid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);