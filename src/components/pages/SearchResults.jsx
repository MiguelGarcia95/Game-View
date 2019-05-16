import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../layout/Navbar';
import Pagination from '../layout/Pagination';
import {ResultsLoader} from '../layout/Loader';
import {search, clearSearch} from '../../actions/searchActions';
import {Page} from '../../utils/styledClasses';

import './style/css/search_results.css';

class SearchResults extends React.Component {
  state = {
    searchTerm: this.props.match.params.query
  }

  componentDidMount() {
    this.props.clearSearch();
    this.props.search(this.props.match.params.query, 1, this.props.match.params.type.slice(0, -1)); 
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSearchKeyDown = e => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.history.push(`/${this.props.match.params.type}/search/${e.target.value}`)
    }
  }

  displayResults = (results, type) => {
    if (results.length > 0) {
      return results.map(result => {
        return (
          <section className="search_result" key={result.id} >
            <Link to={`/${type}/${type.slice(0,-1)}/${result.guid}`} >
              <section className="result_image"><img src={result.image.small_url} alt=""/></section>
              <p>{result.name}</p>
            </Link>
          </section>
        )
      })
    } else {
      return (
        <section className="no_results">
          <h1 className={type} >No Results</h1>
        </section>
      )
    }

  }

  searchHeader = (searchResults, type, searchTerm, totalResults) => {
    return (
      <section className="search_header">
        <section className={`title ${type}`}>
          <h1>Searched for:  <span><input name='searchTerm' value={searchTerm} onChange={this.onChange}  onKeyDown={this.onSearchKeyDown} /></span></h1>
        </section>
        <section className="meta">
          {searchResults && <p>Results: {`${searchResults.length} of ${totalResults ? totalResults : 0}`}</p> }
        </section>
      </section>
    )
  }

  getLastPage = totalResults => Math.ceil(totalResults/10);

  scrollTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  paginationClick = page => {
    this.scrollTop();
    this.props.search(this.props.match.params.query, page, this.props.match.params.type.slice(0, -1)); 
  }

  getLoaderColor = type => {
    if (type === 'franchises') {
      return '#5CB4CF';
    } else if (type === 'games') {
      return '#86D67B';
    } else {
      return '#CF775C';
    }
  }

  render() {
    const {history, searchResults, totalResults, page} = this.props;
    const {searchTerm} = this.state;
    const {type} = this.props.match.params;
    const lastPage = this.getLastPage(totalResults);
    const color = this.getLoaderColor(type);
    return (
      <Page className="page app">
        <Navbar history={history} />
        <div ref={node => this.pageTop = node}></div>

        {this.searchHeader(searchResults, type, searchTerm, totalResults)}

        <section className="search_results">
          {searchResults ? this.displayResults(searchResults, type) : <ResultsLoader color={color} />}
        </section>

        <Pagination page={page} paginationClick={this.paginationClick} lastPage={lastPage} />
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
    search: (query, page, type) => dispatch(search(query, page, type)),
    clearSearch: () => dispatch(clearSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
