import React from 'react';
import './Circle.css';

const Circle = ({clickHandler}) => {
  return (

<div>

<div className="circle-container">
      <div className ="circle" onClick={clickHandler}></div>
      <div className ="circle"onClick={clickHandler}></div>
      <div className ="circle"onClick={clickHandler}></div>
      <div className ="circle"onClick={clickHandler}></div>

    </div>
    </div>
    );

  } ;
export default Circle;