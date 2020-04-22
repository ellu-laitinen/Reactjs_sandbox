import React from 'react';
import './Form.css';

const Form = ({changeHandler}) => {
  
    return (
        <div className="form">
        <form>
          
        <label htmlFor="firstname">First name:</label>
          <input type="text" id="firstname" name="firstname" onChange={changeHandler}/> 
          <br/>
          
          <label htmlFor="lastname">Last name:</label>
          <input type="text" id="lastname" name="lastname" onChange={changeHandler}/> 
          <br/>
          
          <label htmlFor="phone">Phone number: </label>
          <input type="text" id="phone" name="phone" onChange={changeHandler}/>
          <br/>
         
          <label htmlFor="message">Message: </label>
          <textarea type="textarea" id="message" name="message" onChange={changeHandler} />     
      
       </form>    
  </div>
    );
}

export default Form;
