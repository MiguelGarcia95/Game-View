import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../../layout/Navbar';
import PaginationOffset from '../../layout/PaginationOffset';
import SearchHeader from '../../layout/header/SearchHeader';
import Results from '../../layout/Results';
import {getFranchises} from '../../../actions/franchiseActions';
import {Page} from '../../../utils/styledClasses';
import {getCurrentPage, getLastPage, getOffset} from '../../../utils/functions';

import '../style/css/front_page.css';

class Franchises extends React.Component {
  state = {
    searchTerm: ''
  }
  
  componentDidMount() {
    if (this.props.franchises === null) {
      this.props.getFranchises(0);
    }
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSearchKeyDown = e => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.history.push(`/franchises/search/${e.target.value}`)
    }
  }

  scrollTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  paginationClick = offset => {
    this.scrollTop();
    this.props.getFranchises(offset);
  }

  render() {
    const {history, franchises, offset, totalResults} = this.props;
    const lastPage = getLastPage(totalResults);
    const lastOffset = getOffset(totalResults);
    const page = getCurrentPage(offset);
    return (
      <Page className="page app">
        <Navbar history={history} />
        <div ref={node => this.pageTop = node}></div>
        {/* <SearchHeader 
          title='Search For Franchises' headerClass='franchises' 
          onChange={this.onChange} onSearchKeyDown={this.onSearchKeyDown} searchTerm={this.state.searchTerm}  
        /> */}
        <section className='header'><h1>Franchises</h1></section>


        <Results results={franchises} type='franchise' color='#5CB4CF' />

        <PaginationOffset page={page} lastOffset={lastOffset} offset={offset} paginationClick={this.paginationClick} lastPage={lastPage} />
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
