import React, {Component} from 'react';
import './App.css';
import Circle from'./Circle.js';

class App extends Component {
  state = {
    score: 0
  };

  clickHandler = () => {
    this.setState (
      {score:this.state.score +1},
    
      )
  };



render() {
  return (
    <div>
    <h1>Speed Game</h1>
    <p>Current score: {this.state.score}</p>
    <Circle clickHandler={this.clickHandler}></Circle>
    <button className="button">Start Game</button>
    <button className="button">Stop Game</button>

    
    </div>
  );
}
}
export default App;
