import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import DisplayHeader from '../layout/DisplayHeader';
import ImageViewer from '../layout/ImageViewer';

import {getGame} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';

import './css/page.css';

class Games extends React.Component {
  state = {
    currentVideo: null,
    currentImage: null,
    currentImageIndex: null
  }

  componentDidMount() {
    if (!this.props.game) {
      this.props.getGame(this.props.match.params.guid);
    } else if (this.props.game.guid !== this.props.match.params.guid) {
      this.props.getGame(this.props.match.params.guid);
    }
  }

  componentDidUpdate() {
    let about = document.querySelector('#about');
    if (about !== null) {
      let links = about.getElementsByTagName('a');
      for (const link of links) {
        link.removeAttribute('href');
      }
    }
    
    if (this.state.currentImage) {
      window.addEventListener('keydown', e => {
        if (e.keyCode === 27 || e.keyCode === 8 || e.keyCode === 32) {
          this.setCurrentImage(null, null);
        } else if (e.keyCode === 37) {
          if (this.state.currentImageIndex === 0) {
            this.setCurrentImage(
              this.props.game.images[this.props.game.images.length - 1].original, this.props.game.images.length - 1
            );
          } else {
            this.setCurrentImage(
              this.props.game.images[this.state.currentImageIndex - 1].original, this.state.currentImageIndex - 1
            );
          }
        } else if (e.keyCode === 39) {
          if (this.state.currentImageIndex === this.props.game.images.length - 1) {
            this.setCurrentImage(this.props.game.images[0].original, 0);
          } else {
            this.setCurrentImage(
              this.props.game.images[this.state.currentImageIndex + 1].original, this.state.currentImageIndex + 1
            );

          }
        }
      })
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

  displayImages = images => {
    return images.map((image, index) => {
      return <img key={index} src={image.small_url} alt={image.small_url} onClick={() => this.setCurrentImage(image.original, index)} />
    })
  }

  displayFranchises = franchises => {
    return franchises.map(franchise => {
      return <span key={franchise.id}>{franchise.name}</span>
    })
  }

  displayPublishers = publishers => {
    return publishers.map(publisher => {
      return <span key={publisher.id}>{publisher.name}</span>
    })
  }
  
  displayRatings = ratings => {
    return ratings.map(rating => {
      return <span key={rating.id}>{rating.name}</span>
    })
  }

  displayDevs = devs => {
    return devs.map(dev => {
      return <span key={dev.id}>{dev.name}</span>
    })
  }

  setCurrentImage = (image, index) => this.setState({currentImage: image, currentImageIndex: index});

  render() {
    const {game} = this.props;
    const {currentImage, currentImageIndex} = this.state;
    return (
      <Page className="page app">
        <Navbar />
        {game && (
          <React.Fragment>
            <DisplayHeader game={game} scrollDown={this.scrollDown} />

            <div ref={node => this.pageDown = node}></div>
            <section className="page_content game">
              <section className="about" id='about'>
                <header>About The Game</header>
                <div dangerouslySetInnerHTML={{ __html: game.description }} />
              </section>
              <section className="misc">
                <section className="franchises">
                  <p>Franchises: </p>
                  {this.displayFranchises(game.franchises)}
                </section>
                <section className="publishers">
                  <p>Publishers: </p>
                  {this.displayPublishers(game.publishers)}
                </section>
                <section className="ratings">
                  <p>Ratings: </p>
                  {this.displayRatings(game.original_game_rating)}
                </section>
                <section className="devs">
                  <p>Developers: </p>
                  {this.displayDevs(game.developers)}
                </section>
              </section>
              <section className="images">
                <h1>Images</h1>
                {this.displayImages(game.images)}
              </section>
              <section className="videos"></section>
            </section>
            {currentImage && <ImageViewer currentImageIndex={currentImageIndex} currentImage={currentImage} setCurrentImage={this.setCurrentImage} /> }
            
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