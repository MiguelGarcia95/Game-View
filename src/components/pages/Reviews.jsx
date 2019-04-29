import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getHomeReviews} from '../../actions/reviewActions';
import {slideInLeft, slideOutRight} from '../../utils/pageTransitions';
import {OverflowPage} from '../../utils/styledClasses';

const ReviewsPage = styled(OverflowPage)`
  &.page-enter {
    animation: ${slideInLeft} 0.7s ease forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.7s ease forwards;
  }
`;

class Reviews extends React.Component {
  componentDidMount() {
  }

  render() {
    const {history} = this.props;
    return (
      <ReviewsPage className="page app">
        <Navbar history={history} />
        <section className="header">
          <h1>Search For Reviews</h1>
          <input type="text" placeholder='Search For Reviews' className="search_bar"/>
        </section>
        <section className="page_content">
          
        </section>
      </ReviewsPage>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomeReviews: () => dispatch(getHomeReviews())
  }
}

export default connect(null, mapDispatchToProps)(Reviews);
