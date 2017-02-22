import React, { Component } from 'react';
import Navbar from './navbar.js';
import Home from './home.js';
import Level1 from './level1.js';
import Scores from './scores.js';
import Leaderboard from './leader.js';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../css/App.css';

class App extends Component {
  render () {
    return (
        <Router history={browserHistory}>
          <Route path='/' component={Navbar}>
            <IndexRoute component={Home} />
            <Route path='/level' component={Level1} />
            <Route path='/scores' component={Scores} />
            <Route path='/leaderboard' component={Leaderboard} />
          </Route>
        </Router>
    )
  }
}

export default App;
