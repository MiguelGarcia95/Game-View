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

const Header = () => {
  return (
    <section className="home_header">
      <section className="home_header_col one" onClick={() => expandColumn('one')}>
      </section>
      <section className="home_header_col two" onClick={() => expandColumn('two')}>
      </section>
      <section className="home_header_col three" onClick={() => expandColumn('three')}>
      </section>
      <section className="home_header_col four" onClick={() => expandColumn('four')}>
      </section>
      <section className="home_header_col five" onClick={() => expandColumn('five')}>
      </section>
    </section>
  )
}

export default Header;