import React from 'react';
import { browserHistory } from 'react-router';
import '../css/level1.css';

class Level1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pieces: this.props.pieces,
      puzzle: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
      styles: ['gray', 'red', 'springgreen', 'lemonchiffon', 'skyblue', 'goldenrod', 'sandybrown', 'seashell', 'orchid', 'bisque', 'lightblue', 'lightgreen', 'steelblue', 'aquamarine'],
      board: this.props.board,
      moves: this.props.moves,
      time: this.props.time
    }

    this.placePieces = this.placePieces.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.elapseTime = this.elapseTime.bind(this);
    this.startInterval = this.startInterval.bind(this);
    this.theBoard = this.theBoard.bind(this);
  }

  placePieces() {
    const tempBoard = this.state.board;
    for (const piece of this.state.pieces) {
      let pieceSize = piece.length;
      let y = piece.start[0];
      let x = piece.start[1];
      while (pieceSize > 0) {
        tempBoard[y][x].value = piece.id;
        pieceSize--;
        if (piece.direction === 'up') {
          y--;
        }
        else if (piece.direction === 'right') {
          x++;
        }
      }
    }
    this.setState({
      board: tempBoard
    })
  };

  handleClick(event, row, cell) {
    event.preventDefault();

    if (!cell.value) {
      return;
    }

    let moves = this.state.moves;
    moves++;

    const board = this.state.board;
    const y = board.indexOf(row);
    const x = row.indexOf(cell);

    if (cell.value === 1 && board[y - 1] === undefined) {
      this.props.updateScore(this.state.moves, this.state.time);
      browserHistory.push('/scores');
      return;
    }
    //vertical
    if (((board[y][x - 1] ? board[y][x - 1].value : 0) !== cell.value) && ((board[y][x + 1] ? board[y][x + 1].value : 0) !== cell.value)) {
      //top of piece
      if ((board[y - 1][x] ? board[y - 1][x].value : 1) === 0) {
        //move piece up one
        board[y - 1][x].value = cell.value;
        if ((board[y + 2] ? board[y + 2][x].value : 0) === cell.value) {
          board[y + 2][x].value = 0;
        }
        else {
          board[y + 1][x].value = 0;
        }
      }
      //bottom of piece
      else if ((board[y + 1] ? board[y + 1][x].value : 1) === 0) {
        //move piece down one
        board[y + 1][x].value = cell.value;
        if ((board[y - 2] ? board[y - 2][x].value : 0) === cell.value) {
          board[y - 2][x].value = 0;
        }
        else {
          board[y - 1][x].value = 0;
        }
      }
      //middle of piece
      else {
        return;
      }
    }
    //horizontal
    else if (((board[y - 1] ? board[y - 1][x].value : 0) !== cell.value) && ((board[y + 1] ? board[y + 1][x].value : 0) !== cell.value)) {
      //left of piece
      if ((board[y][x - 1] ? board[y][x - 1].value : 1) === 0) {
        //move piece left one
        board[y][x - 1].value = cell.value;
        if ((board[y][x + 2] ? board[y][x + 2].value : 0) === cell.value) {
          board[y][x + 2].value = 0;
        }
        else {
          board[y][x + 1].value = 0;
        }
      }
      //right of piece
      else if ((board[y][x + 1] ? board[y][x + 1].value : 1) === 0) {
        //move piece right one
        board[y][x + 1].value = cell.value;
        if ((board[y][x - 2] ? board[y][x - 2].value : 0) === cell.value) {
          board[y][x - 2].value = 0;
        }
        else {
          board[y][x - 1].value = 0;
        }
      }
      //middle of piece
      else {
        return;
      }
    }

    this.setState({
      board,
      moves
    });
  }

  elapseTime() {
    let time = this.state.time + 1;
    this.setState({time});
  }

  startInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(this.elapseTime, 1000);
  }

  componentDidMount() {
    this.placePieces();
    this.startInterval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    for (const row of this.state.board) {
      for (const cell of row) {
        cell.value = 0;
      }
    }
  }

  theBoard() {
    return (
      this.state.board.map((row) => {
        const rowId = this.state.board.indexOf(row);
        return (
          row.map((cell) => {
            let cellStyle;
            //Top Row
            if (rowId === 0) {
              //Check for target car
              const exit = this.state.pieces[0].start[1];
              if (cell.id === exit && cell.id === 0) {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value],
                  borderTopWidth: 20,
                  borderTopColor: 'lightgrey',
                  borderTopStyle: 'solid',
                  borderLeftWidth: 20,
                  borderLeftColor: 'green',
                  borderLeftStyle: 'solid'
                };
              }
              else if (cell.id === exit && cell.id === 5) {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value],
                  borderTopWidth: 20,
                  borderTopColor: 'lightgrey',
                  borderTopStyle: 'solid',
                  borderRightWidth: 20,
                  borderRightColor: 'green',
                  borderRightStyle: 'solid'
                };
              }
              else if (cell.id === exit) {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value],
                  borderTopWidth: 20,
                  borderTopColor: 'lightgrey',
                  borderTopStyle: 'solid',
                };
              }
              //Left Edge
              else if (cell.id === 0) {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value],
                  borderTopWidth: 20,
                  borderTopColor: 'green',
                  borderTopStyle: 'solid',
                  borderLeftWidth: 20,
                  borderLeftColor: 'green',
                  borderLeftStyle: 'solid'
                };
              }
              //Right Edge
              else if (cell.id === 5) {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value],
                  borderTopWidth: 20,
                  borderTopColor: 'green',
                  borderTopStyle: 'solid',
                  borderRightWidth: 20,
                  borderRightColor: 'green',
                  borderRightStyle: 'solid'
                };
              }
              //Middle Pieces
              else {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value],
                  borderTopWidth: 20,
                  borderTopColor: 'green',
                  borderTopStyle: 'solid'
                };
              }
            }
            //Bottom Row
            else if (rowId === 5) {
              //Left Edge
              if (cell.id % 6 === 0) {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value],
                  borderBottomWidth: 20,
                  borderBottomColor: 'green',
                  borderBottomStyle: 'solid',
                  borderLeftWidth: 20,
                  borderLeftColor: 'green',
                  borderLeftStyle: 'solid'
                };
              }
              //Right Edge
              else if (cell.id % 5 === 0) {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value],
                  borderBottomWidth: 20,
                  borderBottomColor: 'green',
                  borderBottomStyle: 'solid',
                  borderRightWidth: 20,
                  borderRightColor: 'green',
                  borderRightStyle: 'solid'
                };
              }
              //Middle Pieces
              else {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value],
                  borderBottomWidth: 20,
                  borderBottomColor: 'green',
                  borderBottomStyle: 'solid'
                };
              }
            }
            //Middle Rows
            else {
              if (cell.id % 6 === 0) {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value],
                  borderLeftWidth: 20,
                  borderLeftColor: 'green',
                  borderLeftStyle: 'solid'
                };
              }
              else if ((cell.id + 1) % 6 === 0) {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value],
                  borderRightWidth: 20,
                  borderRightColor: 'green',
                  borderRightStyle: 'solid'
                };
              }
              else {
                cellStyle = {
                  width: 99,
                  height: 99,
                  backgroundColor: this.state.styles[cell.value]
                };
              }
            }
            return (
              <div style={cellStyle} key={cell.id} onClick={() => this.handleClick(event, row,  cell)}><div></div></div>
            );
          })
        )
      })
    );
  }

  render() {
    return (
      <div className={'levelmain'}>
        <div className={'level1head'}>Level {this.state.puzzle[this.props.level - 1]}</div>
        <div className="board">
          {this.theBoard()}
        </div>
        <div className={'score'}>
          <div className={'scoreitem'}>Moves: {this.state.moves}</div>
          <div className={'scoreitem'}>Time: {this.state.time}</div>
        </div>
      </div>
    );
  };
}

module.exports = Level1;
