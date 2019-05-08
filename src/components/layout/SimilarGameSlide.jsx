import React from 'react';
import {Link} from 'react-router-dom';
// import {setBackgroundImage} from '../../utils/functions';

const SimilarGameSlide = ({game}) => {
  // const imageStyle = setBackgroundImage(game.image.medium_url);
  return(
    <section className="cast_character">
      {/* <section className="cast_image" style={imageStyle}></section> */}
      <section className="cast_image" ></section>
      <Link to={`/games/game/3030-${game.id}`}>
        <p className="name" >{game.name}</p>
      </Link>
    </section>
  )
}

export default SimilarGameSlide;