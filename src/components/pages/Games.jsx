import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../layout/Navbar';
import {getHomeGames} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';

class Games extends React.Component {
  componentDidMount() {
  }

  render() {
    const {history} = this.props;
    return (
      <Page className="games app">
        <Navbar history={history} />
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomeGames: () => dispatch(getHomeGames())
  }
}

export default connect(null, mapDispatchToProps)(Games);
