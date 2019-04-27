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

  render() {
    const {history, searchResults} = this.props;
    console.log(searchResults)
    return (
      <Page className="page app">
        <Navbar history={history} />
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
