import React from 'react';
import axios from 'axios';
import '../css/leader.css';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      level: this.props.level,
      data: []
    }

    this.fetchData = this.fetchData.bind(this);
    this.pickLevel = this.pickLevel.bind(this);
  }

  fetchData() {
    axios.get(`api/${this.state.level}`)
      .then((res) => {
        this.setState({ data: res.data })
      })
      .catch((err) => {
        this.setState({ data: err.message })
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  pickLevel(levelHighs) {
    this.setState({
      level: levelHighs
    });
  }

  componentWillUpdate() {
    this.fetchData();
  }

  render() {
    return (
      <div className={'leadermain'}>
        <h2 className={'leadertitle'}>Leader Board</h2>
        <div className={'leaderlevels'}>
          <div onClick={() => this.pickLevel(1)}>1</div>
          <div onClick={() => this.pickLevel(2)}>2</div>
          <div onClick={() => this.pickLevel(3)}>3</div>
          <div onClick={() => this.pickLevel(4)}>4</div>
          <div onClick={() => this.pickLevel(5)}>5</div>
          <div onClick={() => this.pickLevel(6)}>6</div>
          <div onClick={() => this.pickLevel(7)}>7</div>
          <div onClick={() => this.pickLevel(8)}>8</div>
          <div onClick={() => this.pickLevel(9)}>9</div>
        </div>
        <table>
          <thead>
            <tr className={'leaderhead'}>
              <th>Level</th>
              <th>Name</th>
              <th>Moves</th>
              <th>Time</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((object) => {
            return (
              <tr key={object.id}>
                <td>{object.level}</td>
                <td>{object.user_name}</td>
                <td>{object.moves}</td>
                <td>{object.time}</td>
                <td>{object.score}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  };
};

module.exports = Leaderboard;
