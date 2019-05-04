import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Navbar from '../../layout/Navbar';
import FranchiseHeader from '../../layout/header/FranchiseHeader';
// import DisplayHeader from '../../layout/header/DisplayHeader';
// import ImageViewer from '../../layout/ImageViewer';

import {getFranchise} from '../../../actions/franchiseActions';
import {Page} from '../../../utils/styledClasses';

import '../css/page.css';
import '../css/games.css';

class DisplayFranchise extends React.Component {
  state = {
    currentImage: null,
    currentImageIndex: null
  }

  componentDidMount() {
    if (!this.props.franchise) {
      this.props.getFranchise(this.props.match.params.guid);
    } else if (this.props.franchise.guid !== this.props.match.params.guid) {
      this.props.getFranchise(this.props.match.params.guid);
    }
  }


  componentDidUpdate() {
    let about = document.querySelector('#about_review');
    if (about !== null) {
      let links = about.getElementsByTagName('a');
      let lazyImages = about.querySelectorAll('.js-lazy-load-image');
      for (const link of links) {
        link.removeAttribute('href');
      }
      lazyImages.forEach(lazyImage => {
        lazyImage.src = lazyImage.dataset.src
      })
    }
    
    // if (this.state.currentImage) {
    //   window.addEventListener('keydown', e => {
    //     if (e.keyCode === 27 || e.keyCode === 8 || e.keyCode === 32) {
    //       this.setCurrentImage(null, null);
    //     }
    //   })
    // }
  }

  // changeImage = (index, direction) => {
  //   const images = this.props.game.images;
  //   if (direction === 'prev') {
  //     if (index === 0) {
  //       this.setCurrentImage(images[images.length - 1].original, images.length - 1);
  //     } else {
  //       this.setCurrentImage(images[index - 1].original, index - 1);
  //     }
  //   } else {
  //     if (index === images.length - 1) {
  //       this.setCurrentImage(images[0].original, 0);
  //     } else {
  //       this.setCurrentImage(images[index + 1].original, index + 1);
  //     }
  //   }
  // }

  scrollToTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  // scrollAbout = () => this.pageDown.scrollIntoView({behavior: 'smooth'});
  // scrollDetails = () => this.pageDetails.scrollIntoView({behavior: 'smooth'});
  // scrollSimilar = () => this.pageSimilar.scrollIntoView({behavior: 'smooth'});
  // scrollImages = () => this.pageImages.scrollIntoView({behavior: 'smooth'});

  // sortPlatforms = (platforms, allPlatforms) => {
  //   return  platforms.reduce((sortedPlatforms, platform) => {
  //     allPlatforms.forEach(pForm => {
  //       if (pForm.id === platform.id) {
  //         sortedPlatforms.push(pForm);
  //       }
  //     });
  //     return sortedPlatforms;
  //   }, []);
  // }

  // displayImages = images => {
  //   return images.map((image, index) => {
  //     return (
  //       <section key={index}  className="display_image">
  //         <img src={image.medium_url} alt={image.tags} onClick={() => this.setCurrentImage(image.original, index)} />
  //       </section>
  //     ) 
  //   })
  // }

  // displayData = data => {
  //   return data.map(item => {
  //     return <span key={item.id}><p>{item.name}</p></span>
  //   })
  // }

  // displaySimilarGames = games => {
  //   return <span>games here</span>
  // }

  // displayRow = (content, name) => {
  //   return (
  //     <section className="row franchises">
  //       <p className='name'>{name}:</p>
  //       <section className="data">
  //         {content ? this.displayData(content) :  <span><p>N/A</p></span> }
  //       </section>
  //     </section>
  //   )
  // }

  // setCurrentImage = (image, index) => this.setState({currentImage: image, currentImageIndex: index});

  render() {
    const {history, franchise} = this.props;
    console.log(franchise);
    return (
      <Page className="page app">
        <Navbar history={history} />
        {franchise && (
          <React.Fragment>
            <FranchiseHeader franchise={franchise} />
            <div ref={node => this.pageTop = node}></div>
            <section className="page_content review">
            <section className='franchise_details'><span>Details</span><p>{`${franchise.deck}`}</p></section>
              <section className="about_review" id='about_review'>
                {/* <header>The Game</header> */}
                {franchise.description ? <div dangerouslySetInnerHTML={{ __html: franchise.description }} /> : <h2 className='not_available'>Not Available</h2>}
              </section>

              {/* <section className="misc">
                <div ref={node => this.pageDetails = node}></div>
                {this.displayRow(game.franchises, 'Franchises')}
                {this.displayRow(game.publishers, 'Publishers')}
                {this.displayRow(game.original_game_rating, 'Ratings')}
                {this.displayRow(game.developers, 'Developers')}
              </section> */}

              {/* <section className="similar_games">
                <div ref={node => this.pageSimilar = node}></div>
                <h1>Similar Games</h1>
                {game.similar_games ? this.displaySimilarGames(game.similar_games) :  <h2 className='not_available'>No Games</h2>}
              </section> */}
              {/* 
              <section className="images">
                <div ref={node => this.pageImages = node}></div>
                <h1>Images</h1>
                {game.images ? this.displayImages(game.images) : <h2 className='not_available'>No Images</h2>}
              </section> */}

            </section>
            {/* {currentImage && <ImageViewer changeImage={this.changeImage} currentImageIndex={currentImageIndex} currentImage={currentImage} setCurrentImage={this.setCurrentImage} /> } */}
            
          </React.Fragment>
        )}
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    franchise: state.franchises.franchise,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFranchise: guid => dispatch(getFranchise(guid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFranchise);