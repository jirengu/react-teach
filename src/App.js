import React from 'react';
import './App.css';
import {add, subtract} from './math'

function App() {
  return (
    <div className="App">
      <h1>3 + 5 + 7 = {add(3, 5, 7)}</h1>
      <h1>3 - 5 = {subtract(3, 5)}</h1>
      
    </div>
  );
}

export default App;
