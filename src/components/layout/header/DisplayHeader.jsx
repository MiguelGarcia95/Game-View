import React from 'react';
import moment from 'moment';
import {setBackgroundImageFixed} from '../../../utils/functions';

import '../style/css/display_header.css';

const DisplayHeader = ({type, content, game}) => {
  if (type === 'review') {
    const headerImage = setBackgroundImageFixed(game.image.screen_large_url);
    return (
      <section className="display_header" style={headerImage}>
        <section className="display_header_screen">
          <h1>{`${content.game.name} review`}</h1>
          <section className="data">
            <span className="score"><span>Score: </span> {content.score} / 5</span>
            <span className="author"><span>By: </span> {content.reviewer}</span>
            <span className="date"><span>On: </span> {moment(content.publish_date).format('LL')}</span>
          </section>
        </section>
      </section>
    )
  } else if (type === 'franchise') {
    const headerImage = setBackgroundImageFixed(content.image.screen_large_url);
    return (
      <section className='display_header franchise_header' style={headerImage}>
        <section className="display_header_screen">
          <h1>Franchise: <span>{content.name}</span></h1>
        </section>
      </section>
    )
  } else {
    return (
      <section className='display_header character_header'>
        <section className="display_header_screen">
          <h1>Character: <span>{content.name}</span></h1>
          <img src={content.image.small_url} alt={content.name} />
        </section>
      </section>
    )
  }
}

export default DisplayHeader;
