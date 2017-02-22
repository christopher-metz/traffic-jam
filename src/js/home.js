import React from 'react';
import { Link } from 'react-router';
import '../css/home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div className={'homehead'}>Pick a level</div>
          <div className={'levels'}>
            <div className={'level'} onClick={() => this.props.updateLevel(1)}><Link activeClassName='App-active' to="level">1</Link></div>
            <div className={'level'} onClick={() => this.props.updateLevel(2)}><Link activeClassName='App-active' to="level">2</Link></div>
            <div className={'level'} onClick={() => this.props.updateLevel(3)}><Link activeClassName='App-active' to="level">3</Link></div>
            <div className={'level'} onClick={() => this.props.updateLevel(4)}><Link activeClassName='App-active' to="level">4</Link></div>
            <div className={'level'} onClick={() => this.props.updateLevel(5)}><Link activeClassName='App-active' to="level">5</Link></div>
            <div className={'level'} onClick={() => this.props.updateLevel(6)}><Link activeClassName='App-active' to="level">6</Link></div>
            <div className={'level'} onClick={() => this.props.updateLevel(7)}><Link activeClassName='App-active' to="level">7</Link></div>
            <div className={'level'} onClick={() => this.props.updateLevel(8)}><Link activeClassName='App-active' to="level">8</Link></div>
            <div className={'level'} onClick={() => this.props.updateLevel(9)}><Link activeClassName='App-active' to="level">9</Link></div>
          </div>
          <h3 className='instructionshead'>Instructions</h3>
          <div className='instructions'>The goal of this game is to move the red piece up to the top of the board and out of the traffic jam as quickly as possible. Click on the edges of the colored pieces to move them around. Empty spaces are gray.</div>
        </main>
      </div>
    );
  };
}
module.exports = Home;
