import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../../layout/Navbar';
import SearchHeader from '../../layout/header/SearchHeader';
import Results from '../../layout/Results';
import PaginationOffset from '../../layout/PaginationOffset';
import {getGames} from '../../../actions/gameActions';
import {Page} from '../../../utils/styledClasses';
import {getCurrentPage, getLastPage, getOffset} from '../../../utils/functions';

import '../style/css/front_page.css';

class Games extends React.Component {
  state = {
    searchTerm: ''
  }
  
  componentDidMount() {
    if (this.props.games === null) {
      this.props.getGames(0);
    }
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSearchKeyDown = e => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.history.push(`/games/search/${e.target.value}`)
    }
  }

  scrollTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  paginationClick = offset => {
    this.scrollTop();
    this.props.getGames(offset);
  }

  render() {
    const {history, games, offset, totalResults} = this.props;
    const lastPage = getLastPage(totalResults);
    const lastOffset = getOffset(totalResults);
    const page = getCurrentPage(offset);
    return (
      <Page className="page app">
        <Navbar history={history} />
        <div ref={node => this.pageTop = node}></div>
        <SearchHeader 
          title='Search For Games' headerClass='games' 
          onChange={this.onChange} onSearchKeyDown={this.onSearchKeyDown} searchTerm={this.state.searchTerm}  
        />

        <Results results={games} type='game' color='#86D67B' />

        <PaginationOffset page={page} lastOffset={lastOffset} offset={offset} paginationClick={this.paginationClick} lastPage={lastPage} />
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games.games,
    totalResults: state.games.totalResults,
    offset: state.games.offset
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGames: offset => dispatch(getGames(offset))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
