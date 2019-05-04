import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../../layout/Navbar';
import FranchiseHeader from '../../layout/header/FranchiseHeader';
import {getFranchise} from '../../../actions/franchiseActions';
import {Page} from '../../../utils/styledClasses';

import '../css/page.css';

class DisplayFranchise extends React.Component {
  componentDidMount() {
    if (!this.props.franchise) {
      this.props.getFranchise(this.props.match.params.guid);
    } else if (this.props.franchise.guid !== this.props.match.params.guid) {
      this.props.getFranchise(this.props.match.params.guid);
    }
  }


  componentDidUpdate() {
    let about = document.querySelector('#about_review');
    if (about !== null) {
      let links = about.getElementsByTagName('a');
      let lazyImages = about.querySelectorAll('.js-lazy-load-image');
      for (const link of links) {
        link.removeAttribute('href');
      }
      lazyImages.forEach(lazyImage => {
        lazyImage.src = lazyImage.dataset.src
      })
    }
  }

  scrollToTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  render() {
    const {history, franchise} = this.props;
    console.log(franchise);
    return (
      <Page className="page app">
        <Navbar history={history} />
        {franchise && (
          <React.Fragment>
            <div ref={node => this.pageTop = node}></div>
            <FranchiseHeader franchise={franchise} />
            <section className="page_content review">
            <section className='franchise_details'><span>Details</span><p>{`${franchise.deck}`}</p></section>
              <section className="about_review" id='about_review'>
                {franchise.description ? <div dangerouslySetInnerHTML={{ __html: franchise.description }} /> : <h2 className='not_available'>Not Available</h2>}
              </section>

            </section>
          </React.Fragment>
        )}
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    franchise: state.franchises.franchise,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFranchise: guid => dispatch(getFranchise(guid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFranchise);