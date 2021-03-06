import React from 'react';
import {Link} from 'react-router-dom';
import {trimString} from '../../utils/functions';
import {setBackgroundImage} from '../../utils/functions';

const HomeResults = ({result, type, setCurrentVideo}) => {
  const imageStyle = setBackgroundImage(result.image.medium_url)
  return (
    <section className="content_result">
      <section className="image" style={imageStyle}>
        {type === 'sidebar' && (
          <section className='play' onClick={() => setCurrentVideo(result.embed_player)}>
            <i className="far fa-play-circle fa-2x"></i>
          </section>
        ) }
      </section>
      <section className="data">
        <section className="name"><p>{result.name}</p></section>
        <section className="description"><p>{result.deck ? trimString(result.deck, 80) : 'N/A'}</p></section>
        <section className="meta">
          {type === 'sidebar' && <p>From: {result.user}</p> }
          {type === 'content' && (
            <React.Fragment>
              <p>Expected: {result.expected_release_year}</p>
              <Link to={`games/game/${result.guid}`}>Go  <i className="fas fa-arrow-right"></i></Link>
            </React.Fragment>
          )}
        </section>
      </section>
    </section>
  )
}

export default HomeResults;