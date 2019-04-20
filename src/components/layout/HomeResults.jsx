import React from 'react';

const HomeResults = () => {
  return (
    <section className="content_result" key={result.id}>
      <section className="image" style={imageStyle}></section>
      <section className="data">
        <section className="name"><p>{result.name}</p></section>
        <section className="description"><p>{result.deck ? trimString(result.deck, 80) : 'N/A'}</p></section>
        <section className="meta">
          <p>From: {result.user}</p>
        </section>
      </section>
    </section>
  )
}

export default HomeResults;