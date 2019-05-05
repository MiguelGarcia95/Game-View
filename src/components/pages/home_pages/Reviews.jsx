import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../../layout/Navbar';
import PaginationOffset from '../../layout/PaginationOffset';
import {getReviews} from '../../../actions/reviewActions';
import {Page} from '../../../utils/styledClasses';
import {getCurrentPage, getLastPage, getOffset} from '../../../utils/functions';

import '../css/page.css';
import '../css/front_page.css';

class Reviews extends React.Component {
  state = {
    searchTerm: ''
  }
  
  componentDidMount() {
    if (this.props.reviews.length === 0) {
      this.props.getReviews(0);
    }
  }


  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSearchKeyDown = e => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.history.push(`/reviews/search/${e.target.value}`)
    }
  }

  scrollTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  displayReviews = reviews => {
    return reviews.map(review => {
      return (
        <section className="display_result" key={review.id} >
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
        <section className="header reviews">
          <h1>Search For Reviews</h1>
          <input 
            name='searchTerm' type="text" placeholder='Search For Reviews' className="search_bar" 
            onChange={this.onChange}  onKeyDown={this.onSearchKeyDown} value={this.state.searchTerm}
          />
        </section>
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
