import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../layout/Navbar';
import Pagination from '../layout/Pagination';
import {searchGames, searchFranchises, searchCharacters} from '../../actions/searchActions';
import {Page} from '../../utils/styledClasses';

import './css/search_results.css';

class SearchResults extends React.Component {
  state = {
    searchTerm: this.props.match.params.query
  }

  componentDidMount() {
    if (this.props.match.params.type === 'games') {
      this.props.searchGames(this.props.match.params.query, 1);
    } else if (this.props.match.params.type === 'franchises') {
      this.props.searchFranchises(this.props.match.params.query, 1);
    }  else if (this.props.match.params.type === 'characters') {
      this.props.searchCharacters(this.props.match.params.query, 1);
    }
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSearchKeyDown = e => {
    if (e.keyCode === 13 && e.target.value) {
      if (this.props.match.params.type === 'games') {
        this.props.history.push(`/games/search/${e.target.value}`)
      } else if (this.props.match.params.type === 'franchises') {
        this.props.history.push(`/franchises/search/${e.target.value}`)
      }  else if (this.props.match.params.type === 'characters') {
        this.props.history.push(`/characters/search/${e.target.value}`)
      }
    }
  }

  // LINKS SHOULD DEPEND ON TYPE
  displayResults = results => {
    return results.map(result => {
      return (
        <section className="search_result" key={result.id} >
          <Link to={`/games/game/${result.guid}`} >
            <section className="result_image"><img src={result.image.small_url} alt=""/></section>
            {result.name}
          </Link>
        </section>
      )
    })
  }

  getLastPage = totalResults =>  Math.ceil(totalResults/10);

  scrollTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  paginationClick = (type, page) => {
    this.scrollTop();
    if (type === 'games') {
      this.props.searchGames(this.props.match.params.query, page);
    } else if (type === 'franchises') {
      this.props.searchFranchises(this.props.match.params.query, page);
    } 
  }

  render() {
    const {history, searchResults, totalResults, page} = this.props;
    const {searchTerm} = this.state;
    const {type} = this.props.match.params;
    const lastPage = this.getLastPage(totalResults);
    return (
      <Page className="page app">
        <Navbar history={history} />
        <div ref={node => this.pageTop = node}></div>

        <section className="search_header">
          <section className={`title ${type}`}>
            <h1>Searched for:  <span><input name='searchTerm' value={searchTerm} onChange={this.onChange}  onKeyDown={this.onSearchKeyDown} /></span></h1>
          </section>
          <section className="meta">
            {searchResults && <p>Results: {`${searchResults.length} of ${totalResults}`}</p> }
          </section>
        </section>

        <section className="search_results">
          {this.displayResults(searchResults)}
        </section>

        <Pagination page={page} type={type} paginationClick={this.paginationClick} lastPage={lastPage} />
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.results.searchResults,
    totalResults: state.results.totalResults,
    page: state.results.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchGames: (query, page) => dispatch(searchGames(query, page)),
    searchFranchises: (query, page) => dispatch(searchFranchises(query, page)),
    searchCharacters: (query, page) => dispatch(searchCharacters(query, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
