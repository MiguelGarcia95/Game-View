import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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

  render() {
    const {history, searchResults, totalResults, page} = this.props;
    const {query} = this.props.match.params;
    const lastPage = this.getLastPage();
    console.log(searchResults)
    return (
      <Page className="page app">
        <Navbar history={history} />
        <section className="search_header">
          <section className="title"><h1>Searched for: <span>{query}</span></h1></section>
          <section className="meta">
            {searchResults && <p>Results: {`${searchResults.length} of ${totalResults}`}</p> }
          </section>
        </section>

        <section className="search_results">
          {this.displayResults(searchResults)}
        </section>

        <section className="pagination">
          {page === 1 ? 
            <section className="arrow_section">
              <section className="arrow double disabled"><i className="fas fa-2x fa-angle-double-left"></i></section>
              <section className="arrow disabled"><i className="fas fa-2x fa-angle-left"></i></section>
            </section> :
            <section className="arrow_section">
              <section className="arrow" onClick={() => this.props.search(query, page - 1)} ><i className="fas fa-2x fa-angle-left"></i></section>
              <section className="arrow double" onClick={() => this.props.search(query, 1)} ><i className="fas fa-2x fa-angle-double-left"></i></section>  
            </section>
          }

          <section className="center_section">
            {page === 1 ? 
              <section className="page_number disabled">1</section> : 
              <section className="page_number" onClick={() => this.props.search(query, lastPage)} >1</section> 
            }
            <section className="page_number current_page">{page}</section>
            {page === lastPage ? 
              <section className="page_number disabled" >{lastPage}</section> : 
              <section className="page_number" onClick={() => this.props.search(query, lastPage)} >{lastPage}</section> 
            }
          </section>
          
          {page === lastPage ? 
            <section className="arrow_section">
              <section className="arrow disabled" ><i className="fas fa-2x fa-angle-right"></i></section>
              <section className="arrow double disabled" ><i className="fas fa-2x fa-angle-double-right"></i></section>
            </section> :
            <section className="arrow_section">
              <section className="arrow" onClick={() => this.props.search(query, page + 1)} ><i className="fas fa-2x fa-angle-right"></i></section>
              <section className="arrow double" onClick={() => this.props.search(query, lastPage)} ><i className="fas fa-2x fa-angle-double-right"></i></section>
            </section>
          }
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
