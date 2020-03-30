import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    likes: 0
  };

  addLikes = () => {
    this.setState(
      {likes:this.state.likes + 1})};

  removeLikes = () => {
    this.setState(
      {likes:this.state.likes -1})};

  resetLikes = () => {
    this.setState(
      {likes:this.state.likes =0})};


  render () {
    return (
      <div>
      <h1>Total likes:{this.state.likes}</h1>
      <button onClick={this.addLikes}>Add likes</button>
      <button onClick={this.removeLikes}>Remove likes</button>
      <button onClick ={this.resetLikes}>Reset likes</button>
      </div>
    );
  }
}

export default App;
