import React from 'react';
import {Link} from 'react-router-dom';
import {ResultsLoader} from './Loader';

const displayGames = games => {
  return games.map(game => {
    return (
      <section className="display_result" key={game.id} >
        <Link to={`/games/game/${game.guid}`} >
          <section className="display_image"><img src={game.image.small_url} alt=""/></section>
          <p>{game.name}</p>
        </Link>
      </section>
    )
  })
}

const displayCharacters = characters => {
  return characters.map(character => {
    return (
      <section className="display_result" key={character.id} >
        <Link to={`/characters/character/${character.guid}`} >
          <section className="display_image"><img src={character.image.small_url} alt=""/></section>
          <p>{character.name}</p>
        </Link>
      </section>
    )
  })
}

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