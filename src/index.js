import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {Provider, connect} from 'react-redux';
import styled from "styled-components";
import store from './store';

import './style.css';
import Home from './components/pages/Home';
import Games from './components/pages/Games';
import SearchResults from './components/pages/SearchResults';
import DisplayGame from './components/pages/DisplayGame';
import Reviews from './components/pages/Reviews';
import Franchises from './components/pages/Franchises';
import Characters from './components/pages/Characters';
import * as serviceWorker from './serviceWorker';

const PageContainer = styled.div`
  position: relative;
  width: 100%;
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
                  <Route exact path='/' component={Home} />
                  <Route exact path='/games' component={Games} />
                  <Route path='/games/game/:guid' component={DisplayGame} />
                  <Route exact path='/reviews' component={Reviews} />
                  {/* <Route path='/reviews/review/:guid' component={DisplayReview} /> */}
                  <Route exact path='/franchises' component={Franchises} />
                  {/* <Route path='/franchises/franchise/:guid' component={DisplayFranchise} /> */}
                  <Route exact path='/characters' component={Characters} />
                  {/* <Route path='/characters/character/:guid' component={DisplayCharacter} /> */}
                  <Route path='/:type/search/:query' component={SearchResults} />
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
