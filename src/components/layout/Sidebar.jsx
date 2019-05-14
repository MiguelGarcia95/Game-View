import React from 'react';
import HomeResult from './HomeResult';
import {SidebarLoader} from './Loader';
import './style/css/sidebar.css';

const displayResults = (results, type, setCurrentVideo) => {
  return results.map(result => {
    return <HomeResult result={result} type={type} key={result.id} setCurrentVideo={setCurrentVideo} />
  })
}

const Sidebar = ({title, content, setCurrentVideo}) => {
  if (content.length > 0) {
    return (
      <section className="sidebar">
        <section className="title">
          <h1>{title}</h1>
        </section>
        {displayResults(content, 'sidebar', setCurrentVideo)}
      </section>
    )
  } else {
    return (
      <section className="sidebar">
        <section className="title">
          <h1>{title}</h1>
        </section>
        <SidebarLoader />
      </section>
    )
  }
}

export default Sidebar;