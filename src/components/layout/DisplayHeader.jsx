import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
// import './css/home_header.css';

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

const displayPlatforms = (platforms, allPlatforms) => {
  return platforms.map(item => {
    return (
      <section key={item.id} className="platform"><p>{item.name}</p></section>
    )
  })
}

const DisplayHeader = ({game, scrollDown}) => {
  const imageStyle = {
    backgroundImage: `url(${game.image.screen_large_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
  let view = true;
  if (view) {
    return (
      <section className="display_header_2" style={imageStyle}>
        <section className="display_cover"></section>
        <section className="display_box">
          <section className="display_top">
            <section className="image"></section>
            <section className="about"></section>
          </section>
          <section className="row name"></section>
          <section className="row platforms"></section>
          <section className="row genres"></section>
          <section className="row themes"></section>
          <section className="row date"></section>
        </section>
      </section>
    )
  } else {
    return (
      <section className="display_header">
        <section className="display_image" style={imageStyle}></section>
        <section className="display_content">
          <section className="content_container">
            <img className="image" src={game.image.small_url} alt={game.name}/>
            <section className="data">
              <section className="name"><h1>{game.name}</h1></section>
              <section className="description"><p>{game.deck}</p></section>
              <section className="platforms">
                <p className="title">Available On </p>
                {game.platforms && displayPlatforms(game.platforms)}
              </section>
              <section className="genres">
                <p className="title">Genres: </p>
                {game.genres && displayMetaData(game.genres)}
              </section>
              <section className="themes">
                <p className="title">Themes: </p>
                {game.themes && displayMetaData(game.themes)}
              </section>
              <section className="release_date">
                <p className="title">Release Date: </p>
                <p className='date'>{getDate(game.original_release_date, game.expected_release_year)}</p>
              </section>
            </section>
          </section>
        </section>
        <section className="scroll_down" onClick={() => scrollDown()}>
          <i className="fas fa-caret-down fa-4x"></i>
        </section>
      </section>
    )
  }
}

export default DisplayHeader;