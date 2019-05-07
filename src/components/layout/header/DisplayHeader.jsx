import React from 'react';

const DisplayHeader = ({type, content, game}) => {
  if (type === 'review') {
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
  } else {
    return (
      <section>
  
      </section>
    )
  }
}

export default DisplayHeader;
