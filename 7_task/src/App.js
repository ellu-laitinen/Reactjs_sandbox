
import React, { useState } from 'react';
import './App.css'
import Button from './Button/Button.js'



const App = () => {
  const [counter, setCounter] = useState(0)
  const addHandler = () => setCounter(counter +1)
  const addSecondHandler = () => setCounter(counter +1)
  const resetHandler = () => setCounter(0)

  return (
   <div> 
      <div>
      <Button click={addHandler} text="Alrighty then" ></Button>
      <Button click={addSecondHandler} text="I think not"></Button>
      <Button click={resetHandler}text ="I'm too confused now.  Reset my thoughts!"></Button>
      </div>
      <h1>Thoughts, yes or no</h1>
      <p>Alright: {counter}</p>
      <p>Nope: {counter}</p>
      </div>
  );
}

export default App;

