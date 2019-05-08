import React from 'react';
import {Link} from 'react-router-dom';
import {setBackgroundImage} from '../../utils/functions';

const SimilarGameSlide = ({game}) => {
  // const imageStyle = setBackgroundImage(game.image.medium_url);
  return(
    <section className="cast_character">
      {/* <section className="cast_image" style={imageStyle}></section> */}
      <section className="cast_image" ></section>
      <Link to={`/games/game/3030-${game.id}`}>
        <p className="search_result_movie_link"><i className="fas fa-expand-arrows-alt "></i></p>  
      </Link>
      <section className="cast_data">
        <p className="name" >{game.name}</p>
      </section>
    </section>
  )
}

export default SimilarGameSlide;