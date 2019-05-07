import React from 'react';
import moment from 'moment';

import {setBackgroundImage, setBackgroundImageFixed} from '../../../utils/functions';
import '../css/game_header.css';

const getDate = (original_date, expected_date) => {
  if (original_date !== null) {
    return moment(original_date).format('LL');
  } else if (expected_date) {
    return expected_date;
  } else {
    return 'N/A';
  }
}

const displayMetaData = (data) => {
  return data.map(item => {
    return <span key={item.id} className="data_span">{item.name}</span>
  })
}

const GameHeader = ({game, scrollDown}) => {
  const headerImage = setBackgroundImageFixed(game.image.screen_large_url);
  const displayImage = setBackgroundImage(game.image.small_url);
  
  return (
    <section className="game_header" style={headerImage}>
      <section className="display_cover"></section>
      <section className="display_box">
        <section className="display_top">
          <section className="image" style={displayImage} >
          </section>
          <section className="name"><h1>{game.name}</h1></section>
          <section className="about"><p>{game.deck}</p></section>
        </section>
        <section className="row platforms">
          <span className="title">Available On: </span>
          {game.platforms && displayMetaData(game.platforms)}
        </section>
        <section className="row genres">
          <span className="title">Genres: </span>
          {game.genres && displayMetaData(game.genres)}
        </section>
        <section className="row themes">
          <span className="title">Themes: </span>
          {game.themes && displayMetaData(game.themes)}
        </section>
        <section className="row date">
          <span className="title">Release Date: </span>
          <span className='date'>{getDate(game.original_release_date, game.expected_release_year)}</span>
        </section>
      </section>
      <section className="scroll_down" onClick={() => scrollDown()}>
        <i className="fas fa-caret-down fa-4x"></i>
      </section>
    </section>
  )
}

export default GameHeader;