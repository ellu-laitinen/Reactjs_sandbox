import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    likes: 100
  }
  render () {
    return (
      <div>
      <h1>Total likes:{this.state.likes}</h1>
      </div>
    )
  }
}

export default App;
