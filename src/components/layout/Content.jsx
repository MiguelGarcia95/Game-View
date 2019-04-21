import React from 'react';
import HomeResult from './HomeResult';

const displayResults = (results, type) => {
  return results.map(result => {
    return <HomeResult result={result} type={type} key={result.id} />
  })
}

const Content = ({title, content}) => {
  return (
    <section className="sidebar">
      <section className="title">
        <h1>{title}</h1>
      </section>
      {content.length > 0 && displayResults(content, 'sidebar')}
    </section>
  )
}

export default Content;