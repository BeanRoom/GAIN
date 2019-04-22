// @flow
import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from "mobx-react"
import { Router, Route, Switch } from "react-router-dom";
import HeaderContainer from 'containers/Base/HeaderContainer';

import './App.css'

import { Home, Auth, Board } from 'pages';
import { stores } from './stores'

const history = createBrowserHistory()

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider {...stores}>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/channels/@me/:id' component={Home} />
              <Route exact path='/auth' component={Auth} />
              <Route exact path='/board' component={Board} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;