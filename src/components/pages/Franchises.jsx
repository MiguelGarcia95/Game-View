import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../layout/Navbar';
import PaginationOffset from '../layout/PaginationOffset';
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

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSearchKeyDown = e => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.history.push(`/franchises/search/${e.target.value}`)
    }
  }

  scrollTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  displayFranchises = franchises => {
    return franchises.map(franchise => {
      return (
        <section className="display_result" key={franchise.id} >
          <section className="display_image"><img src={franchise.image.small_url} alt=""/></section>
          <Link to={`/franchises/franchise/${franchise.guid}`} ><p>{franchise.name}</p></Link>
        </section>
      )
    })
  }

  getLastPage = () => Math.ceil(this.props.totalResults/50);
  getCurrentPage = offset =>  Math.ceil(offset/50) + 1;

  getOffset = totalResults => {
    return totalResults - totalResults%50;
  }

  paginationClick = offset => {
    this.scrollTop();
    this.props.getFranchises(offset);
  }

  render() {
    const {history, franchises, offset, totalResults} = this.props;
    const lastPage = this.getLastPage();
    const lastOffset = this.getOffset(totalResults);
    const page = this.getCurrentPage(offset);
    return (
      <Page className="page app">
        <Navbar history={history} />
        <div ref={node => this.pageTop = node}></div>
        <section className="header">
          <h1>Search For Franchises</h1>
          <input 
            name='searchTerm' type="text" placeholder='Search For Franchises' className="search_bar" 
            onChange={this.onChange}  onKeyDown={this.onSearchKeyDown} value={this.state.searchTerm}
          />
        </section>
        <section className="page_content">
          {this.displayFranchises(franchises)}
        </section>
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
