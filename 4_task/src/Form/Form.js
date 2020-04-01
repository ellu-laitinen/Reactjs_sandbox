import React from 'react';
import './Form.css';

const Form = () => {
  
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
        
       
    
  </div>
    );
}

export default Form;
