import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getHomeGames} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';

class Franchises extends React.Component {
  componentDidMount() {
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

const mapDispatchToProps = dispatch => {
  return {
    getHomeGames: () => dispatch(getHomeGames())
  }
}

export default connect(null, mapDispatchToProps)(Franchises);
