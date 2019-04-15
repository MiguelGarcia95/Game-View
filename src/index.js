import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {Provider, connect} from 'react-redux';
import styled from "styled-components";
import store from './store';

import './index.css';
import App from './components/App';
import Test from './components/Test';
import * as serviceWorker from './serviceWorker';

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #232323;
`;

const Root = () => {
  return (
    <BrowserRouter>
      <Route render={({location}) => {
        return (
          <PageContainer>
            <TransitionGroup component={null}>
              <CSSTransition
                timeout={600}
                classNames='page'
                key={location.key}
              >
                <Switch location={location}>
                  <Route exact path='/' component={App} />
                  <Route exact path='/test' component={Test} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </PageContainer>
        )
      }} />
    </BrowserRouter>
  )
}

const RootWithAuth = withRouter(connect()(Root));

const RootWithRouter = () => {
  return (
    <Provider store={store} >
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
