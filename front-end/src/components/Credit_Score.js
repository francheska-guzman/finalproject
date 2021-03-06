import React, { Component } from 'react';

// console.log("Credit Score is working.");

class CreditScore extends Component {
  constructor(props){
  	super(props);
    this.state = {
      user_score: null,
      user_state: null,
      state_score: null
    }
    this.userScore = this.userScore.bind(this);
  }

  componentWillMount() {
    // Grabbing the user credit score, the state when she live and the average
    // in that state with the intention to render, if person is logged in.
    if(this.props.state.user === true) {
      this.setState({
        user_score: this.props.state.user_credit_score,
        user_state: this.props.state.state,
        state_score: this.props.state.state_average_score
      })
    }
  }

  userScore() {
    // If there's data in user_score, render the name of the state
    // where user lives, and the average score on that state.
    if(this.state.user_score !== null) {
      return (
        <div>
          <h2 className="font80">{this.state.user_score}</h2>
          <h2 className="font20">The average credit score in {this.state.user_state} is {this.state.state_score}.</h2>
        </div>
    )}
  }

  render() {
    return (
      <div>
        <h2 className="center">Credit Score</h2>
        {this.userScore()}
      </div>
    );
  }
}

export default CreditScore;