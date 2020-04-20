import React, { Component, Suspense } from 'react';
import './App.css';

const Add = React.lazy(() => import('./Add'))
const Substract = React.lazy(() => import('./Substract'))
console.log('app3')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Add></Add>
          <Substract></Substract>
        </Suspense>
      </div>
    )
  }
}

export default App;
