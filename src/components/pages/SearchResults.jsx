import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {search} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';
import './css/page.css';

class SearchResults extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.query);
  }

  render() {
    const {history} = this.props;
    return (
      <Page className="page app">
        <Navbar history={history} />
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: () => dispatch(search())
  }
}

export default connect(null, mapDispatchToProps)(SearchResults);
