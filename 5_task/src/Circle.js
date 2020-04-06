import React from 'react';
import './Circle.css';

const Circle = props => {
  return (
  <div className="circle-container">
      <div className ="circle" onClick={props.click}></div>
  </div>
    );

  } ;
export default Circle;