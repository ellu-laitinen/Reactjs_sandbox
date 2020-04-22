import React from 'react';
import './Button.css'

const Button = ({click, text, children}) => {
    return (
        <div>
            <button className="buttons" onClick = {click}>{text} {children}</button>
        </div>
    )
  }

export default Button;
