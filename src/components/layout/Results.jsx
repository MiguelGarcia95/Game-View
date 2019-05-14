import React from 'react';
import {Link} from 'react-router-dom';
import {ResultsLoader} from './Loader';

const displayData = (dataArray, type) => {
  return dataArray.map(data => {
    return (
      <section className="display_result" key={data.id} >
        <Link to={`/${type}s/${type}/${data.guid}`} >
          <section className="display_image"><img src={data.image.small_url} alt=""/></section>
          <p>{data.name}</p>
        </Link>
      </section>
    )
  })
}


const Results = ({type, results, color}) => {
  if (results) {
    return (
      <section className="page_content">
        {displayData(results, 'character')}
      </section>
    )
  } else {
    return (
      <section>
        <ResultsLoader color='#CF775C' />
      </section>
    )
  }

}

export default Results;