import React from "react";
import Slider from "react-slick";
import SimilarGameSlide from './SimilarGameSlide';

const displaySlides = slides => {
  return slides.map(slide => {
    return <SimilarGameSlide key={slide.id} game={slide} />
  })
}

const SimilarGames = ({games}) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <section className="similar_games_slider">
        {displaySlides(games)}
      {/* <Slider {...settings}> */}
      {/* </Slider> */}
    </section>
  )
}

export default SimilarGames;