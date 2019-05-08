import React from "react";
import SimilarGameSlide from './SimilarGameSlide';
import './css/similar_games.css';

const displaySlides = slides => {
  return slides.map(slide => {
    return <SimilarGameSlide key={slide.id} game={slide} />
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