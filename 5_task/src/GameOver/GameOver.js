import React from 'react';
import './GameOver.css';

const GameOver = () => {
    return (
        <div className="gameover">
            <h1>Game Over</h1>
            <p>Your final score: </p>
            <button>Close</button>
        </div>
    )
}


export default GameOver;