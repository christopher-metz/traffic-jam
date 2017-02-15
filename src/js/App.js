import React, { Component } from 'react';
import Level1 from './level1.js';
import Level2 from './level2.js';
import Leaderboard from './leader.js';
import { Router, Route, Link, browserHistory } from 'react-router';
import '../css/App.css';

const Home = (props) =>
  <div>
    <h1>Traffic Jam!</h1>
    <h2>Pick a level</h2>
    <Link activeClassName='App-active' to="level1">1</Link>
    <Link activeClassName='App-active' to="level2">2</Link>
    {props.children}
  </div>

export default class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home}/>
        <Route path='/level1' component={Level1} />
        <Route path='/level2' component={Level2} />
        <Route path='/leaderboard' component={Leaderboard} />
      </Router>
    )
  }
}
