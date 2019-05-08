import React from 'react';
import HomeResult from './HomeResult';
import './style/css/content.css';

const displayResults = (results, type) => {
  return results.map(result => {
    return <HomeResult result={result} type={type} key={result.id} />
  })
}

const Content = ({title, content}) => {
  return (
    <section className="content">
      <section className="title">
        <h1>{title}</h1>
      </section>
      <section className="content_results">
        {content.length > 0 && displayResults(content, 'content')}
      </section>
    </section>
  )
}

export default Content;