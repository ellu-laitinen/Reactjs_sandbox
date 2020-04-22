
import React, { useState } from 'react';
import './App.css'
import Button from './Button/Button.js'
import Content from './Content/Content.js'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faTimesCircle} from "@fortawesome/free-solid-svg-icons";



const Likes = () => {
  const [yesCounter, setYesCounter] = useState(0)
  const [noCounter, setNoCounter] = useState(0)
  const addHandler = () => setYesCounter(yesCounter +1)
  const addSecondHandler = () => setNoCounter(noCounter +1)
  const resetHandler = () => {
    setYesCounter(0); 
    setNoCounter(0)}


  return (
   <div> 
     <h1>Do this or that?</h1>
      <div>
      <Button click={addHandler} text="Alrighty then"><FontAwesomeIcon icon={faHeart} className="icon"/></Button>
      <Button click={addSecondHandler} text="Bad idea"><FontAwesomeIcon icon={faTimesCircle} className="icon"/></Button>
      <Button click={resetHandler}text ="I'm too confused now. Reset my thoughts!"></Button>
      </div>
 <Content yesCounter={yesCounter} noCounter={noCounter}></Content>
      </div>
  );
}

export default Likes;

