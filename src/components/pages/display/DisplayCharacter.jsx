import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../../layout/Navbar';
import ReviewHeader from '../../layout/header/ReviewHeader';
import {getCharacter} from '../../../actions/characterActions';
import {Page} from '../../../utils/styledClasses';

import '../css/page.css';
import '../css/games.css';

class DisplayReview extends React.Component {
  state = {
    currentImage: null,
    currentImageIndex: null
  }

  componentDidMount() {
    if (!this.props.character) {
      this.props.getCharacter(this.props.match.params.guid);
    } else if (this.props.character.guid !== this.props.match.params.guid) {
      this.props.getCharacter(this.props.match.params.guid);
    }
  }


  componentDidUpdate() {

    // let about = document.querySelector('#about_review');
    // if (about !== null) {
    //   let links = about.getElementsByTagName('a');
    //   let lazyImages = about.querySelectorAll('.js-lazy-load-image');
    //   for (const link of links) {
    //     link.removeAttribute('href');
    //   }
    //   lazyImages.forEach(lazyImage => {
    //     lazyImage.src = lazyImage.dataset.src
    //   })
    // }
  }


  scrollToTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  render() {
    const {history, review, game} = this.props;
    return (
      <Page className="page app">
        <Navbar history={history} />
        {review && (
          <React.Fragment>
            {game && <ReviewHeader review={review} game={game} />}
            <div ref={node => this.pageTop = node}></div>
            <section className="page_content review">
              <section className="about_review" id='about_review'>
                <header>The Game</header>
                {review.description ? <div dangerouslySetInnerHTML={{ __html: review.description }} /> : <h2 className='not_available'>Not Available</h2>}
              </section>
            </section>
          </React.Fragment>
        )}
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    character: state.characters.character
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCharacter: guid => dispatch(getCharacter(guid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayReview);