import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 1,
      moves: 0,
      time: 0,
      pieces: [
        //Puzzle One
        [
          {id: 1, start: [5,0], length: 2, direction: 'up'},
          {id: 2, start: [0,0], length: 2, direction: 'right'},
          {id: 3, start: [0,2], length: 3, direction: 'right'},
          {id: 4, start: [1,0], length: 3, direction: 'right'},
          {id: 5, start: [1,3], length: 2, direction: 'right'},
          {id: 6, start: [2,0], length: 3, direction: 'right'},
          {id: 7, start: [2,5], length: 3, direction: 'up'},
          {id: 8, start: [4,3], length: 3, direction: 'up'},
          {id: 9, start: [5,1], length: 2, direction: 'up'},
          {id: 10, start: [5,3], length: 3, direction: 'right'}
        ],
        //Puzzle Two
        [
          {id: 1, start: [5,0], length: 2, direction: 'up'},
          {id: 2, start: [0,0], length: 2, direction: 'right'},
          {id: 3, start: [0,2], length: 2, direction: 'right'},
          {id: 4, start: [1,0], length: 2, direction: 'right'},
          {id: 5, start: [1,4], length: 2, direction: 'up'},
          {id: 6, start: [1,5], length: 2, direction: 'up'},
          {id: 7, start: [2,3], length: 3, direction: 'right'},
          {id: 8, start: [3,0], length: 3, direction: 'right'},
          {id: 9, start: [3,4], length: 2, direction: 'right'},
          {id: 10, start: [4,3], length: 2, direction: 'up'},
          {id: 11, start: [5,2], length: 3, direction: 'right'},
          {id: 12, start: [5,5], length: 2, direction: 'up'}
        ],
        //Puzzle Three
        [
          {id: 1, start: [3,2], length: 2, direction: 'up'},
          {id: 2, start: [0,2], length: 2, direction: 'right'},
          {id: 3, start: [0,4], length: 2, direction: 'right'},
          {id: 4, start: [1,0], length: 2, direction: 'up'},
          {id: 5, start: [1,1], length: 2, direction: 'up'},
          {id: 6, start: [1,2], length: 2, direction: 'right'},
          {id: 7, start: [1,4], length: 2, direction: 'right'},
          {id: 8, start: [2,0], length: 2, direction: 'right'},
          {id: 9, start: [3,0], length: 2, direction: 'right'},
          {id: 10, start: [3,3], length: 2, direction: 'up'},
          {id: 11, start: [3,4], length: 2, direction: 'up'},
          {id: 12, start: [5,4], length: 2, direction: 'up'}
        ],
        //Puzzle Four
        [
          {id: 1, start: [4,0], length: 2, direction: 'up'},
          {id: 2, start: [0,4], length: 2, direction: 'right'},
          {id: 3, start: [1,0], length: 2, direction: 'right'},
          {id: 4, start: [1,2], length: 2, direction: 'up'},
          {id: 5, start: [1,3], length: 2, direction: 'up'},
          {id: 6, start: [2,0], length: 2, direction: 'right'},
          {id: 7, start: [2,2], length: 2, direction: 'right'},
          {id: 8, start: [2,4], length: 2, direction: 'up'},
          {id: 9, start: [2,5], length: 2, direction: 'up'},
          {id: 10, start: [3,4], length: 2, direction: 'right'},
          {id: 11, start: [4,4], length: 2, direction: 'right'},
          {id: 12, start: [5,3], length: 2, direction: 'right'}
        ],
        //Puzzle Five
        [
          {id: 1, start: [5,1], length: 2, direction: 'up'},
          {id: 2, start: [0,2], length: 2, direction: 'right'},
          {id: 3, start: [0,4], length: 2, direction: 'right'},
          {id: 4, start: [1,0], length: 2, direction: 'right'},
          {id: 5, start: [2,2], length: 2, direction: 'up'},
          {id: 6, start: [2,3], length: 2, direction: 'up'},
          {id: 7, start: [2,4], length: 2, direction: 'right'},
          {id: 8, start: [4,0], length: 3, direction: 'up'},
          {id: 9, start: [3,1], length: 3, direction: 'right'},
          {id: 10, start: [4,2], length: 2, direction: 'right'},
          {id: 11, start: [5,2], length: 2, direction: 'right'},
          {id: 12, start: [5,4], length: 3, direction: 'up'},
          {id: 13, start: [5,5], length: 3, direction: 'up'}
        ],
        //Puzzle Six
        [
          {id: 1, start: [3,2], length: 2, direction: 'up'},
          {id: 2, start: [0,0], length: 2, direction: 'right'},
          {id: 3, start: [0,2], length: 2, direction: 'right'},
          {id: 4, start: [1,2], length: 2, direction: 'right'},
          {id: 5, start: [1,4], length: 2, direction: 'right'},
          {id: 6, start: [2,1], length: 2, direction: 'up'},
          {id: 7, start: [2,3], length: 3, direction: 'right'},
          {id: 8, start: [3,0], length: 2, direction: 'right'},
          {id: 9, start: [5,0], length: 2, direction: 'up'},
          {id: 10, start: [5,1], length: 2, direction: 'right'},
          {id: 11, start: [5,4], length: 3, direction: 'up'},
          {id: 12, start: [5,5], length: 3, direction: 'up'}
        ],
        //Puzzle Seven
        [
          {id: 1, start: [3,2], length: 2, direction: 'up'},
          {id: 2, start: [0,1], length: 2, direction: 'right'},
          {id: 3, start: [0,3], length: 2, direction: 'right'},
          {id: 4, start: [1,0], length: 2, direction: 'up'},
          {id: 5, start: [1,2], length: 3, direction: 'right'},
          {id: 6, start: [2,0], length: 2, direction: 'right'},
          {id: 7, start: [2,5], length: 2, direction: 'up'},
          {id: 8, start: [3,3], length: 3, direction: 'right'},
          {id: 9, start: [4,1], length: 2, direction: 'right'},
          {id: 10, start: [5,0], length: 3, direction: 'up'},
          {id: 11, start: [5,2], length: 2, direction: 'right'},
          {id: 12, start: [5,4], length: 2, direction: 'right'}
        ],
        //Puzzle Eight
        [
          {id: 1, start: [3,1], length: 2, direction: 'up'},
          {id: 2, start: [0,1], length: 3, direction: 'right'},
          {id: 3, start: [1,0], length: 3, direction: 'right'},
          {id: 4, start: [1,4], length: 2, direction: 'up'},
          {id: 5, start: [2,2], length: 2, direction: 'right'},
          {id: 6, start: [2,4], length: 2, direction: 'right'},
          {id: 7, start: [3,3], length: 3, direction: 'right'},
          {id: 8, start: [4,0], length: 3, direction: 'up'},
          {id: 9, start: [4,4], length: 2, direction: 'right'},
          {id: 10, start: [5,3], length: 2, direction: 'right'}
        ],
        //Puzzle Nine
        [
          {id: 1, start: [5,2], length: 2, direction: 'up'},
          {id: 2, start: [0,0], length: 3, direction: 'right'},
          {id: 3, start: [1,2], length: 3, direction: 'right'},
          {id: 4, start: [2,1], length: 3, direction: 'right'},
          {id: 5, start: [3,0], length: 2, direction: 'right'},
          {id: 6, start: [3,2], length: 2, direction: 'right'},
          {id: 7, start: [3,4], length: 2, direction: 'up'},
          {id: 8, start: [3,5], length: 3, direction: 'up'},
          {id: 9, start: [4,4], length: 2, direction: 'right'},
          {id: 10, start: [5,3], length: 2, direction: 'up'},
          {id: 11, start: [5,4], length: 2, direction: 'right'}
        ]
      ],
      board: [
        [
          {id: 0, value: 0},
          {id: 1, value: 0},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0},
          {id: 5, value: 0}
        ],
        [
          {id: 6, value: 0},
          {id: 7, value: 0},
          {id: 8, value: 0},
          {id: 9, value: 0},
          {id: 10, value: 0},
          {id: 11, value: 0}
        ],
        [
          {id: 12, value: 0},
          {id: 13, value: 0},
          {id: 14, value: 0},
          {id: 15, value: 0},
          {id: 16, value: 0},
          {id: 17, value: 0}],
        [
          {id: 18, value: 0},
          {id: 19, value: 0},
          {id: 20, value: 0},
          {id: 21, value: 0},
          {id: 22, value: 0},
          {id: 23, value: 0}
        ],
        [
          {id: 24, value: 0},
          {id: 25, value: 0},
          {id: 26, value: 0},
          {id: 27, value: 0},
          {id: 28, value: 0},
          {id: 29, value: 0}
        ],
        [
          {id: 30, value: 0},
          {id: 31, value: 0},
          {id: 32, value: 0},
          {id: 33, value: 0},
          {id: 34, value: 0},
          {id: 35, value: 0}
        ]
      ]
    };

    this.updateScore = this.updateScore.bind(this);
    this.updateLevel = this.updateLevel.bind(this);
    this.resetMovesTime = this.resetMovesTime.bind(this);
  };

  updateScore(newMoves, newTime) {
    this.setState({
      moves: newMoves,
      time: newTime
    });
  };

  updateLevel(newLevel) {
    this.setState({
      level: newLevel
    })
  };

  resetMovesTime() {
    this.setState({
      moves: 0,
      time: 0
    })
  };

  render() {
    return (
      <div>
        <nav className="App-header">
          <Link to='/' className={'home'}>Home</Link>
          <h1>Traffic Jam!</h1>
          <Link to='/leaderboard' className={'leader'}>Leader Board</Link>
        </nav>
        {
          React.cloneElement(this.props.children, {
            updateScore: this.updateScore,
            board: this.state.board,
            moves: this.state.moves,
            time: this.state.time,
            updateLevel: this.updateLevel,
            pieces: this.state.pieces[this.state.level - 1],
            level: this.state.level,
            reset: this.resetMovesTime
          })
        }
      </div>
    )
  }
};

module.exports = Navbar;
