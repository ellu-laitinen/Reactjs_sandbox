import React, { Component} from 'react';
import './App.css';
import View from './View/View';


class App extends Component {

  state = {
    firstname: "",
    lastname: "",
    phone: "",
    message: ""
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
      <form>
      <label htmlFor="firstname">First name: </label>
        <input type="text" id="firstname" name="firstname" onChange={this.changeHandler}/>
        <br/>
        <label htmlFor="lastname">Last name: </label>
        <input type="text" id="lastname" name="lastname" onChange={this.changeHandler}/>
        <br/>
        <label htmlFor="phone">Phone number: </label>
        <input type="text" id="phone" name="phone"  onChange={this.changeHandler}/>
        <br/>
        <label htmlFor="message">Message: </label>
        <textarea type="textarea" id="message" name="message" onChange={this.changeHandler}/>     
      </form>    
      
      <View firstname={this.state.firstname} lastname={this.state.lastname} phone={this.state.phone} message={this.state.message}/>
  
</div>
  );
   
  }
}
export default App;


