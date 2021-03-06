import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../../layout/Navbar';
import DisplayHeader from '../../layout/header/DisplayHeader';
import {FullHeaderLoader} from '../../layout/Loader';
import {getReview, clearReview} from '../../../actions/reviewActions';
import {getGame} from '../../../actions/gameActions';
import {Page} from '../../../utils/styledClasses';

import '../style/css/display_page.css';

class DisplayReview extends React.Component {
  componentDidMount() {
    if (!this.props.review) {
      this.props.getReview(this.props.match.params.guid);
    } else if (this.props.review.guid !== this.props.match.params.guid) {
      this.props.clearReview();
      this.props.getReview(this.props.match.params.guid);
    }
  }


  componentDidUpdate() {
    if (this.props.review && (!this.props.game || this.props.game.id !== this.props.review.game.id)) {
      this.props.getGame(`3030-${this.props.review.game.id}`)
    }

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
  }


  scrollToTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  render() {
    const {history, review, game} = this.props;
    return (
      <Page className="page app">
        <Navbar history={history} />
        {review ? (
          <React.Fragment>
            {game && <DisplayHeader content={review} game={game} type='review' />}
            <div ref={node => this.pageTop = node}></div>
            <section className="page_content review">
              <section className="about" id='about_review'>
                <header>The Game</header>
                {review.description ? <section dangerouslySetInnerHTML={{ __html: review.description }} /> : <h2 className='not_available'>Not Available</h2>}
              </section>
            </section>
          </React.Fragment>
        ) : <FullHeaderLoader />}
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    review: state.reviews.review,
    game: state.games.game
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getReview: guid => dispatch(getReview(guid)),
    getGame: guid => dispatch(getGame(guid)),
    clearReview: () => dispatch(clearReview())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayReview);