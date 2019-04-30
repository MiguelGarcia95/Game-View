import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getFranchises} from '../../actions/franchiseActions';
import {Page} from '../../utils/styledClasses';

class Franchises extends React.Component {
  state = {
    searchTerm: ''
  }
  
  componentDidMount() {
    if (this.props.franchises.length === 0) {
      this.props.getFranchises(0);
    }
  }

  render() {
    const {history} = this.props;
    return (
      <Page className="page app">
        <Navbar history={history} />
        <section className="header">
          <h1>Search For Franchises</h1>
          <input type="text" placeholder='Search For Franchises' className="search_bar"/>
        </section>
        <section className="page_content">
          
        </section>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    franchises: state.franchises.franchises,
    totalResults: state.franchises.totalResults,
    offset: state.franchises.offset
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFranchises: offset => dispatch(getFranchises(offset))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Franchises);
