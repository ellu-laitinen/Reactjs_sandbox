import React, {Component} from 'react';
import './App.css';
import Circle from'./Circle.js';

const getInteger = (min, max) => {
 return Math.floor(Math.random() * (max - min + 1) ) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0
  };

  pace = 1000;
  timer = undefined;

  next = () => {
    let nextActive = undefined;

    do {
      nextActive = getInteger(1, 4);
    } while (nextActive === this.state.current)

    this.setState(
      {current: nextActive,
    });

    this.timer =setTimeout(this.next, this.pace);
    console.log(this.state.current);

};

  clickHandler = (circleID) => { 
    console.log('Clicked ', circleID);
    this.setState (
      {score:this.state.score +1}
      );
  };

  startHandler = () => {
    this.next();
  };

  endHandler = () => {
    clearTimeout(this.timer);
  }

render() {
  return (
    <div>
    <h1>Speed Game</h1>
    <p>Current score: {this.state.score}</p>
    <Circle active ={this.state.current === 1}buttonColor = "green" click={this.clickHandler.bind(this, 1)}></Circle>
    <Circle active ={this.state.current === 2}buttonColor = "yellow"click={this.clickHandler.bind(this, 2)}></Circle>
    <Circle active ={this.state.current === 3}buttonColor = "purple"click={this.clickHandler.bind(this, 3)}></Circle>
    <Circle active ={this.state.current === 4}buttonColor = "orange"click={this.clickHandler.bind(this, 4)}></Circle>
    <div className="buttons">
    <button onClick={this.startHandler} className="button">Start Game</button>
    <button onClick={this.endHandler} className="button">Stop Game</button>
</div>
    
    </div>
  );
}
}
export default App;
