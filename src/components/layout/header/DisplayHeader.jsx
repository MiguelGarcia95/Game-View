import React from 'react';
import moment from 'moment';
import {setBackgroundImageFixed} from '../../../utils/functions';

import '../css/display_header.css';

const DisplayHeader = ({type, content, game}) => {
  if (type === 'review') {
    const headerImage = setBackgroundImageFixed(game.image.screen_large_url);
    return (
      <section className="display_header" style={headerImage}>
        <h1>{`${content.game.name} review`}</h1>
        <section className="score">
          <p>Score: <span>{content.score} / 5</span></p>
        </section>
        <section className="meta">
          <span className="author"><span>By: </span> {content.reviewer}</span>
          <span className="date"><span>On: </span> {moment(content.publish_date).format('LL')}</span>
        </section>
      </section>
    )
  } else if (type === 'franchise') {
    const headerImage = setBackgroundImageFixed(game.image.screen_large_url);
    return (
      <section className='display_header franchise_header' style={headerImage}>
        <h1>Franchise: <span>{content.name}</span></h1>
      </section>
    )
  } else {
    return (
      <section className='display_header character_header'>
        <h1>Character: <span>{content.name}</span></h1>
        <img src={content.image.small_url} alt={content.name} />
      </section>
    )
  }
}

export default DisplayHeader;
