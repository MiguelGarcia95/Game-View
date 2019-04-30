import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../layout/Navbar';
import Pagination from '../layout/Pagination';
import {searchGames, searchFranchises, searchCharacters} from '../../actions/searchActions';
import {Page} from '../../utils/styledClasses';
import './css/page.css';
import './css/search_results.css';

class SearchResults extends React.Component {
  componentDidMount() {
    if (this.props.match.params.type === 'games') {
      this.props.searchGames(this.props.match.params.query, 1);
    } else if (this.props.match.params.type === 'franchises') {
      this.props.searchFranchises(this.props.match.params.query, 1);
    }  else if (this.props.match.params.type === 'characters') {
      this.props.searchCharacters(this.props.match.params.query, 1);
    }
  }

  // LINKS SHOULD DEPEND ON TYPE
  displayResults = results => {
    return results.map(result => {
      return (
        <section className="search_result" key={result.id} >
          <section className="result_image"><img src={result.image.small_url} alt=""/></section>
          <Link to={`/games/game/${result.guid}`} >{result.name}</Link>
        </section>
      )
    })
  }

  getLastPage = () => {
    return Math.ceil(this.props.totalResults/10);
  }

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
    const {query, type} = this.props.match.params;
    const lastPage = this.getLastPage();
    return (
      <Page className="page app">
        <Navbar history={history} />
        <div ref={node => this.pageTop = node}></div>

        <section className="search_header">
          <section className={`title ${type}`}><h1>Searched for: <span>{query}</span></h1></section>
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
