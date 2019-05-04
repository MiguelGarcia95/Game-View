import React from 'react';
import moment from 'moment';

const ReviewHeader = ({review, game}) => {
  const headerImage = {
    backgroundImage: `url(${game.image.screen_large_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed'
  }
  
  return (
    <section className="review_header" style={headerImage}>
      <h1>{`${review.game.name} review`}</h1>
      <section className="score">
        <p>Score: <span>{review.score} / 5</span></p>
      </section>
      <section className="meta">
        <span className="author"><span>By: </span> {review.reviewer}</span>
        <span className="date"><span>On: </span> {moment(review.publish_date).format('LL')}</span>
      </section>
    </section>
  )
}

export default ReviewHeader;