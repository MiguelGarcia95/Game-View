import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {search} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';
import './css/page.css';

class SearchResults extends React.Component {
  componentDidMount() {
    this.props.search(this.props.match.params.query, 1);
  }

  displayResults = results => {
    return results.map(result => {
      return (
        <h1 key={result.id}>{result.name}</h1>
      )
    })
  }

  render() {
    const {history, searchResults, totalResults} = this.props;
    console.log(searchResults)
    return (
      <Page className="page app">
        <Navbar history={history} />
        <section className="header">
          <section className="title"><h1>{this.props.match.params.query}</h1></section>
          <section className="meta">
            {searchResults && <p>{`${searchResults.length} of ${totalResults}`}</p> }
          </section>
        </section>
        <section className="search_results">
          {this.displayResults(searchResults)}
        </section>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.games.searchResults,
    totalResults: state.games.totalResults,
    page: state.games.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: (query, page) => dispatch(search(query, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
