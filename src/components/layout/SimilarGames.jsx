import React from "react";
import Slider from "react-slick";
import SimilarGameSlide from './SimilarGameSlide';

const displaySlides = slides => {
  return slides.map(slide => {
    // return <SimilarGameSlide key={slide.guid} game={slide} />
    console.log(slide)
  })
}

const SimilarGames = ({games}) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    // responsive: [
    //   {
    //     breakpoint: 670,
    //     settings: {
    //       slidesToShow: 1,
    //       centerPadding: "0px",
    //     }
    //   },
    // ]
  };
  return (
    <section className="similar_games_slider">
      <Slider {...settings}>
        {displaySlides(games)}
      </Slider>
    </section>
  )
}

export default SimilarGames;