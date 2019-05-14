import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../../layout/Navbar';
import PaginationOffset from '../../layout/PaginationOffset';
import Results from '../../layout/Results';
import {getReviews} from '../../../actions/reviewActions';
import {Page} from '../../../utils/styledClasses';
import {getCurrentPage, getLastPage, getOffset} from '../../../utils/functions';

import '../style/css/front_page.css';

class Reviews extends React.Component {
  componentDidMount() {
    if (this.props.reviews === null) {
      this.props.getReviews(0);
    }
  }

  scrollTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

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

        {/* {reviews && reviews.length > 0 ? (
          <section className="page_content reviews">
            {this.displayReviews(reviews)}
          </section>
        ) : <ResultsLoader color='#D67B9E' />} */}

        <Results results={reviews} type='review' color='#D67B9E' />

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
