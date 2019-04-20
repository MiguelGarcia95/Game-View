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

const displayColumns = (games) => {
  return games.map((game, index) => {
    const colName = getColumnName(index);
    const imageStyle = {
      backgroundImage: `url(${game.image.medium_url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
    console.log(game)
    return (
      <section key={index} className={`home_header_col ${colName}`} onClick={() => expandColumn(colName)}>
        <section className="image" style={imageStyle}></section>
        <section className="data">
          <section className="name"><p></p></section>
          <section className="date"><p></p></section>
        </section>
      </section>
    )
  })
}

const HomeHeader = ({games}) => {
  return (
    <section className="home_header">
      {games && displayColumns(games)}
    </section>
  )
}

export default HomeHeader;