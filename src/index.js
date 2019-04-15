import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import store from './store';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={App} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

const RootWithAuth = withRouter(connect()(Root));

const RootWithRouter = () => {
  return (
    <Provider>
      <BrowserRouter>
        <RootWithAuth />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<RootWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
