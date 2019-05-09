import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../../layout/Navbar';
import PaginationOffset from '../../layout/PaginationOffset';
import {getReviews} from '../../../actions/reviewActions';
import {Page} from '../../../utils/styledClasses';
import {getCurrentPage, getLastPage, getOffset} from '../../../utils/functions';

import '../style/css/front_page.css';

class Reviews extends React.Component {
  componentDidMount() {
    if (this.props.reviews.length === 0) {
      this.props.getReviews(0);
    }
  }

  scrollTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  displayReviews = reviews => {
    return reviews.map(review => {
      return (
        <section className="display_result_review" key={review.id} >
          <Link to={`/reviews/review/${review.guid}`} ><p>Review - {review.game.name}</p></Link>
          <section className="display_description"><p>{review.deck}</p></section>
          <section className="meta">
            <section className="display_author"><p><span>Author: </span>{review.reviewer}</p></section>
            <section className="display_date"><p><span>Date: </span>{moment(review.publish_date).format('LL')}</p></section>
            <section className="display_score"><p><span>Score: </span>{review.score} / 5</p></section> 
          </section>
          <section className="display_button"><Link to={`/reviews/review/${review.guid}`}>Read More...</Link></section> 
        </section>
      )
    })
  }

  paginationClick = offset => {
    this.scrollTop();
    this.props.getReviews(offset);
  }

  render() {
    const {history, reviews, offset, totalResults} = this.props;
    const lastPage = getLastPage(totalResults);
    const lastOffset = getOffset(totalResults);
    const page = getCurrentPage(offset);
    return (
      <Page className="page app">
        <Navbar history={history} />
        <div ref={node => this.pageTop = node}></div>
        <section className='header'><h1>Reviews</h1></section>
        <section className="page_content reviews">
          {this.displayReviews(reviews)}
        </section>
        <PaginationOffset page={page} lastOffset={lastOffset} offset={offset} paginationClick={this.paginationClick} lastPage={lastPage} />

      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews.reviews,
    totalResults: state.reviews.totalResults,
    offset: state.reviews.offset
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getReviews: offset => dispatch(getReviews(offset))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
