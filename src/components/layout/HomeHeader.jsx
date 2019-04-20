import React from 'react';

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
    return (
      <section key={index} className={`home_header_col ${colName}`} onClick={() => expandColumn(colName)}>

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