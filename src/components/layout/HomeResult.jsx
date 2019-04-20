import React from 'react';
import {trimString} from '../../utils/functions';

const HomeResult = ({result, type}) => {
  const imageStyle = {
    backgroundImage: `url(${result.image.medium_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
  return (
    <section className="content_result" key={result.id}>
      <section className="image" style={imageStyle}></section>
      <section className="data">
        <section className="name"><p>{result.name}</p></section>
        <section className="description"><p>{result.deck ? trimString(result.deck, 80) : 'N/A'}</p></section>
        <section className="meta">
          {type === 'sidebar' ? <p>From: {result.user}</p> : <p>Expected: {result.expected_release_year}</p> }
        </section>
      </section>
    </section>
  )
}

export default HomeResult;