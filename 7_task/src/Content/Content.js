import React from 'react';

const Content = ({ yesCounter, noCounter}) => {

    if (yesCounter === 0 && noCounter === 0 ) {
        return (
            <div className="content"><h2>No opinions yet</h2></div>
        )
    } 
        
    return (
        <div className ="contect">
        <h1>Thoughts, yes or no</h1>
        <h2>Alright: {yesCounter}</h2>
         <h2>Nope: {noCounter}</h2>
        </div>
    );
}

export default Content;

