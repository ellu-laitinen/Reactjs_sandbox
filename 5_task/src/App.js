import React, {Component} from 'react';
import './App.css';
import Circle from'./Circle.js';

class App extends Component {
  state = {
    score: 0

  };



render() {
  return (
    <div>
    <h1>Speed Game</h1>
    <p>Current score: </p>
    <Circle></Circle>
    <button className="button">Start Game</button>
    <button className="button">Stop Game</button>

    
    </div>
  );
}
};
export default App;
