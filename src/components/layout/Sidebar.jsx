import React from 'react';
import HomeResult from './HomeResult';
import './style/css/sidebar.css';

const displayResults = (results, type, setCurrentVideo) => {
  return results.map(result => {
    return <HomeResult result={result} type={type} key={result.id} setCurrentVideo={setCurrentVideo} />
  })
}

const Sidebar = ({title, content, setCurrentVideo}) => {
  return (
    <section className="sidebar">
      <section className="title">
        <h1>{title}</h1>
      </section>
      {content.length > 0 && displayResults(content, 'sidebar', setCurrentVideo)}
    </section>
  )
}

export default Sidebar;