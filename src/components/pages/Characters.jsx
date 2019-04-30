import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../layout/Navbar';
import PaginationOffset from '../layout/PaginationOffset';
import {getCharacters} from '../../actions/characterActions';
import {Page} from '../../utils/styledClasses';

import './css/page.css';

class Characters extends React.Component {
  state = {
    searchTerm: ''
  }
  
  componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.getCharacters(0);
    }
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSearchKeyDown = e => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.history.push(`/characters/search/${e.target.value}`)
    }
  }

  scrollTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  displayCharacters = characters => {
    return characters.map(character => {
      return (
        <section className="display_result" key={character.id} >
          <section className="display_image"><img src={character.image.small_url} alt=""/></section>
          <Link to={`/characters/character/${character.guid}`} ><p>{character.name}</p></Link>
        </section>
      )
    })
  }

  getLastPage = () => Math.ceil(this.props.totalResults/50);
  getCurrentPage = offset =>  Math.ceil(offset/50) + 1;

  getOffset = totalResults => {
    return totalResults - totalResults%50;
  }

  paginationClick = offset => {
    this.scrollTop();
    this.props.getCharacters(offset);
  }

  render() {
    const {history, characters, offset, totalResults} = this.props;
    const lastPage = this.getLastPage();
    const lastOffset = this.getOffset(totalResults);
    const page = this.getCurrentPage(offset);
    return (
      <Page className="page app">
        <Navbar history={history} />
        <div ref={node => this.pageTop = node}></div>
        <section className="header">
          <h1>Search For Characters</h1>
          <input 
            name='searchTerm' type="text" placeholder='Search For Characters' className="search_bar" 
            onChange={this.onChange}  onKeyDown={this.onSearchKeyDown} value={this.state.searchTerm}
          />
        </section>
        <section className="page_content">
          {this.displayCharacters(characters)}
        </section>

        <PaginationOffset page={page} lastOffset={lastOffset} offset={offset} paginationClick={this.paginationClick} lastPage={lastPage} />
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters.characters,
    totalResults: state.characters.totalResults,
    offset: state.characters.offset
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getCharacters: offset => dispatch(getCharacters(offset))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
