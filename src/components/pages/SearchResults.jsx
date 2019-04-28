import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../layout/Navbar';
import {searchGames} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';
import './css/page.css';

class SearchResults extends React.Component {
  componentDidMount() {
    if (this.props.match.params.type === 'games') {
      this.props.searchGames(this.props.match.params.query, 1);
    }
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

  scrollTop = () => {
    this.pageTop.scrollIntoView({behavior: 'smooth'});
  }

  paginationClick = (type, page) => {
    this.scrollTop();
    if (type === 'games') {
      this.props.searchGames(this.props.match.params.query, page);
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
              <section className="arrow" onClick={() => this.paginationClick(type, page - 1)} ><i className="fas fa-2x fa-angle-left"></i></section>
              <section className="arrow double" onClick={() => this.paginationClick(type, 1)} ><i className="fas fa-2x fa-angle-double-left"></i></section>  
            </section>
          }

          <section className="center_section">
            {page === 1 ? 
              <section className="page_number disabled">1</section> : 
              <section className="page_number" onClick={() => this.paginationClick(type, lastPage)} >1</section> 
            }
            <section className="page_number current_page">{page}</section>
            {page === lastPage ? 
              <section className="page_number disabled" >{lastPage}</section> : 
              <section className="page_number" onClick={() => this.paginationClick(type, lastPage)} >{lastPage}</section> 
            }
          </section>
          
          {page === lastPage ? 
            <section className="arrow_section">
              <section className="arrow disabled" ><i className="fas fa-2x fa-angle-right"></i></section>
              <section className="arrow double disabled" ><i className="fas fa-2x fa-angle-double-right"></i></section>
            </section> :
            <section className="arrow_section">
              <section className="arrow" onClick={() => this.paginationClick(type, page + 1)} ><i className="fas fa-2x fa-angle-right"></i></section>
              <section className="arrow double" onClick={() => this.paginationClick(type, lastPage)} ><i className="fas fa-2x fa-angle-double-right"></i></section>
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
    searchGames: (query, page) => dispatch(searchGames(query, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
