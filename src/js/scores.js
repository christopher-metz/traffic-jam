import React from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';
import '../css/scores.css';
import './validation'
import Validation from 'react-validation';

class Scores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.score = this.props.moves * this.props.time;
  }
  componentWillUnmount() {
    this.props.reset();
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
        errors: this.form.validateAll()
    });

    if (!Object.entries(this.state.errors).length) {
      axios.post('api', {
        user_name: event.target[0].value,
        moves: this.props.moves,
        time: this.props.time,
        score: this.score,
        level: this.props.level
      })
      .then(function (response) {
        browserHistory.push('/leaderboard');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };

  render() {
    return (
      <div className={'scoresmain'}>
        <h2 className={'scoreshead'}>You Win!</h2>
        <div className={'scoresboard'}>
          <Link to='/' className={'cancel'}>X</Link>
          <div>
            <div className={'scoresgroup'}>
              <div className={'scoresitem'}>Level: {this.props.level}</div>
              <div className={'scoresitem'}>Score: {this.score}</div>
            </div>
            <div className={'scoresgroup'}>
              <div className={'scoresitem'}>Moves: {this.props.moves}</div>
              <div className={'scoresitem'}>Time: {this.props.time}</div>
            </div>
          </div>
          <Validation.components.Form ref={c => this.form = c} onSubmit={this.handleSubmit}>
            <div>
                <label>
                  User Name:
                  <Validation.components.Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='username' validations={['required', 'alpha']}/>
                </label>
            </div>
            <div>
                <div>
                    <Validation.components.Button className='button' errorClassName='asd'>Submit</Validation.components.Button>
                </div>
            </div>
          </Validation.components.Form>
        </div>
      </div>
    );
  };
}

module.exports = Scores;
