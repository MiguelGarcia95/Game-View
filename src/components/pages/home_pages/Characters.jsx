import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../../layout/Navbar';
import PaginationOffset from '../../layout/PaginationOffset';
import SearchHeader from '../../layout/header/SearchHeader';
import {getCharacters} from '../../../actions/characterActions';
import {Page} from '../../../utils/styledClasses';
import {getCurrentPage, getLastPage, getOffset} from '../../../utils/functions';

import '../css/front_page.css';


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
          <Link to={`/characters/character/${character.guid}`} >
            <section className="display_image"><img src={character.image.small_url} alt=""/></section>
            <p>{character.name}</p>
          </Link>
        </section>
      )
    })
  }

  paginationClick = offset => {
    this.scrollTop();
    this.props.getCharacters(offset);
  }

  render() {
    const {history, characters, offset, totalResults} = this.props;
    const lastPage = getLastPage(totalResults);
    const lastOffset = getOffset(totalResults);
    const page = getCurrentPage(offset);
    return (
      <Page className="page app">
        <Navbar history={history} />
        <div ref={node => this.pageTop = node}></div>
        <SearchHeader 
          title='Search For Characters' headerClass='characters' 
          onChange={this.onChange} onSearchKeyDown={this.onSearchKeyDown} searchTerm={this.state.searchTerm}  
        />
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
