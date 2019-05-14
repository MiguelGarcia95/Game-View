import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../../layout/Navbar';
import PaginationOffset from '../../layout/PaginationOffset';
import SearchHeader from '../../layout/header/SearchHeader';
import Results from '../../layout/Results';
import {getCharacters} from '../../../actions/characterActions';
import {Page} from '../../../utils/styledClasses';
import {getCurrentPage, getLastPage, getOffset} from '../../../utils/functions';

import '../style/css/front_page.css';


class Characters extends React.Component {
  state = {
    searchTerm: ''
  }
  
  componentDidMount() {
    if (this.props.characters === null) {
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

        <Results results={characters} type='character' color='#CF775C' />

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
