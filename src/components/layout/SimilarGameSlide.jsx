import React from 'react';
import {Link} from 'react-router-dom';

const SimilarGameSlide = ({game}) => {
  return(
    <section className="similar_game">
      <section className="similar_game_image" ></section>
      <Link to={`/games/game/3030-${game.id}`}>
        <p className="name" >{game.name}</p>
      </Link>
    </section>
  )
}

export default SimilarGameSlide;