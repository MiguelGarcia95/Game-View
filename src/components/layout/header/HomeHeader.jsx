import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

import {setBackgroundImage} from '../../../utils/functions';
import '../css/home_header.css';

const closeColumns = () => {
  const header = document.querySelectorAll('.home_header_col');
  header.forEach(head => {
    head.classList.remove('active');
  })
}

const expandColumn = col => {
  const colName = cleanClassName(col);
  const column = document.querySelector(`.${colName}`);
  const header = document.querySelector('.home_header');
  if (column.className.includes('active')) {
    header.classList.remove('selected');
    column.classList.remove('active');
  } else {
    closeColumns();
    header.classList.add('selected');
    column.classList.toggle('active');
  }
}

const cleanClassName = (classString) => {
  if (classString.includes('active') && classString.includes('three')) {
    return 'three';
  } else {
    return classString;
  }
}

const getColumnName = colNumber => {
  switch (colNumber) {
    case 0:
      return 'one'
    case 1:
      return 'two'
    case 2:
      return 'three active'
    case 3:
      return 'four'
    default:
      return 'five'
  }
}

const getUniqueGames = games => {
  return games.reduce((sortedGames, game) => {
    if (sortedGames.length > 0 && sortedGames.length < 5) {
      let isInArray = false;
      sortedGames.forEach(sortedGame => {
        if (game.game.name === sortedGame.game.name) {
          isInArray = true;
        }      
      });
      if (!isInArray) {
        sortedGames.push(game);
      }
    } else if (sortedGames.length < 5) {
      sortedGames.push(game);
    }
    return sortedGames;
  }, []);
}

const displayColumns = (games) => {
  return games.map((game, index) => {
    const colName = getColumnName(index);
    const imageStyle = setBackgroundImage(game.image.super_url);
    return (
      <section key={index} className={`home_header_col ${colName}`} onClick={() => expandColumn(colName)}>
        <section className="image" style={imageStyle}></section>
        <section className="image_filter"></section>
        <section className="data">
          <section className="name"><h1>{game.game.name}</h1></section>
          <section className="platform"><h3>Platform: {game.platform.name}</h3></section>
          <section className="date"><p>Release Date: {moment(game.release_date).format('LL')}</p></section>
          <Link to={`games/game/3030-${game.game.id}`} ><section className='link'>Check Out <i className="fas fa-arrow-right fa-lg"></i></section></Link>
          
        </section>
      </section>
    )
  })
}

const HomeHeader = ({games, pageDown}) => {
  const sortedGames = getUniqueGames(games);
  return (
    <section className="home_header selected">
      {games && displayColumns(sortedGames)}
      <section className="scroll_down" onClick={() => pageDown()}>
        <i className="fas fa-caret-down fa-4x"></i>
      </section>
    </section>
  )
}

export default HomeHeader;