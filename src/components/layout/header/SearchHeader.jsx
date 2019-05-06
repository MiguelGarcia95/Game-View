import React from 'react';
import '../css/search_header.css';

const SearchHeader = ({title, headerClass, onChange, onSearchKeyDown, searchTerm}) => {
  return (
    <section className={`header ${headerClass}`}>
      <h1>{title}</h1>
      <input 
        name='searchTerm' type="text" placeholder='Search For Games' className="search_bar" 
        onChange={onChange}  onKeyDown={onSearchKeyDown} value={searchTerm}
      />
    </section>
  )
}

export default SearchHeader;