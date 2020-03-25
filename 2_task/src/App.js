import React from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  return (
  <div>
    <h1>Hello, World!</h1>
    <p>Hello, world</p>
    <Person name="Ellu" age="34"/>
    <Person name="Luna" age="7"/>
    <Person name="Oki" age="6"/>
    <Person name="Jarkko" age="40"/>
    
  </div>
  );
};

export default App;

