import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {

  state = {
    likes: 0,
    date: new Date()
    
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


  getDate() {
        const date = { currentTime: new Date().toLocaleString()};
        this.getDate({
            date: date
        });
    }
  

  render () {
    return (
      <div className="container">
        <Header/>
        <div className="likesContainer">
      <h2 className={this.state.likes== 0 ? "likes" : this.state.likes % 2 === 0 ? "likes even" : "likes odd"}>Total likes: {this.state.likes}</h2>
      <button onClick={this.addLikes}>Add likes</button>
      <button onClick={this.removeLikes}>Remove likes</button>
      <button onClick ={this.resetLikes}>Reset likes</button>
      </div>
      <Footer/>
      </div>
     
    );
  }
}

export default App;
