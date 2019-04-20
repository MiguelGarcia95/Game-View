import React from 'react';
import './css/home_header.css';

const closeColumns = () => {
  const header = document.querySelectorAll('.home_header_col');
  header.forEach(head => {
    head.classList.remove('active');
  })
}

const expandColumn = col => {
  const column = document.querySelector(`.${col}`);
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

const getColumnName = colNumber => {
  switch (colNumber) {
    case 0:
      return 'one'
    case 1:
      return 'two'
    case 2:
      return 'three'
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
    const imageStyle = {
      backgroundImage: `url(${game.image.original_url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
    console.log(game)
    return (
      <section key={index} className={`home_header_col ${colName}`} onClick={() => expandColumn(colName)}>
        <section className="image" style={imageStyle}></section>
        <section className="image_filter" ></section>
        <section className="data">
          <section className="name"><p></p></section>
          <section className="date"><p></p></section>
        </section>
      </section>
    )
  })
}

const HomeHeader = ({games}) => {
  const sortedGames = getUniqueGames(games);
  return (
    <section className="home_header">
      {games && displayColumns(sortedGames)}
    </section>
  )
}

export default HomeHeader;