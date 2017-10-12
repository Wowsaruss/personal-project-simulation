import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Login} ></Route>
            <Route path='/dashboard' component={Dashboard} ></Route>
          </Switch>
      </div>
    );
  }
}

export default App;
