import React from "react";
import './css/similar_games.css';
import {Link} from 'react-router-dom';

const displaySlides = slides => {
  return slides.map(slide => {
    return (
      <section className="similar_game" key={slide.id}>
        <section className="similar_game_image" ></section>
        <Link to={`/games/game/3030-${slide.id}`}>
          <p>{slide.name} <i className="fas fa-chevron-right"></i></p>
        </Link>
      </section>
    )
  })
}

const SimilarGames = ({games}) => {
  return (
    <section className="similar_games">
      {displaySlides(games)}
    </section>
  )
}

export default SimilarGames;