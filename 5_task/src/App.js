import React, {Component} from 'react';
import './App.css';
import Circle from'./Circle.js';

class App extends Component {
  state = {
    score: 0,
    current: 0
  };

  clickHandler = (circleID) => { 
    console.log('Clicked ', circleID);

    this.setState (
      {score:this.state.score +1}
      )
  };

  /* 
  
  let result = "";
  let i = 0;
  
  do {
    Math.floor(Math.random() * 5) + 1;
    result = result + i;
  } while (i < 5);
  
  console.log(result); */

  

render() {
  return (
    <div>
    <h1>Speed Game</h1>
    <p>Current score: {this.state.score}</p>
    <Circle click={this.clickHandler.bind(this, 1)}></Circle>
    <Circle click={this.clickHandler.bind(this, 2)}></Circle>
    <Circle click={this.clickHandler.bind(this, 3)}></Circle>
    <Circle click={this.clickHandler.bind(this, 4)}></Circle>
    <button className="button">Start Game</button>
    <button className="button">Stop Game</button>

    
    </div>
  );
}
}
export default App;
