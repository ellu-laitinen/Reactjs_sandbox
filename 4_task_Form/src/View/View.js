import React from 'react';
import './View.css';

const View = props => {
    return (
        <div>
        
        <div className="view">
            <div className="lines">

            </div>
            <h1>This is your input: </h1>
            <p>First name: <span className="color"> {props.firstname}</span> </p>
            <p>Last name: <span className="color">{props.lastname}</span></p>
            <p>Phone number:<span className="color"> {props.phone}</span></p>
            <p>Message: <span className="color">{props.message} </span></p>
        </div>
        </div>
    );
}

export default View;
