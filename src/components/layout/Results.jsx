import React from 'react';
import {Link} from 'react-router-dom';
import {ResultsLoader} from './Loader';
import moment from 'moment';

const displayData = (dataArray, type) => {
  return dataArray.map(data => {
    return (
      <section className="display_result" key={data.id} >
        <Link to={`/${type}s/${type}/${data.guid}`} >
          <section className="display_image"><img src={data.image.small_url} alt=""/></section>
          <p>{data.name}</p>
        </Link>
      </section>
    )
  })
}

const displayReviews = reviews => {
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


const Results = ({type, results, color}) => {
  if (results) {
    return (
      <section className="page_content">
        {type === 'review' ? displayReviews(results) : displayData(results, type) }
      </section>
    )
  } else {
    return (
      <section>
        <ResultsLoader color={color} />
      </section>
    )
  }

}

export default Results;