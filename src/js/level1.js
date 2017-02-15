import React from 'react';
import { Link } from 'react-router';

const Level1 = () =>
  <div>
    <navbar>
      <Link to='/'>Home</Link>
      <h1>Traffic Jam!</h1>
      <Link to='leaderboard'>Leader Board</Link>
    </navbar>
    Level 1
  </div>

module.exports = Level1;
