import React from 'react';
import './Form.css';

const Form = props => {
  
    return (
        <div className="form">
        <form>
        <label htmlFor="firstname">First name: </label>
          <input type="text" id="firstname" name="firstname" onChange={props.firstname}/>
          <br/>
          <label htmlFor="lastname">Last name: </label>
          <input type="text" id="lastname" name="lastname" onChange={props.lastname}/>
          <br/>
          <label htmlFor="phone">Phone number: </label>
          <input type="text" id="phone" name="phone" onChange={props.phone}/>
          <br/>
          <label htmlFor="message">Message: </label>
          <textarea type="textarea" id="message" name="message" onChange={props.message} />     
        </form>    
  </div>
    );
}

export default Form;
