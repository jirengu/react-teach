import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    v1: '',
    v2: ''
  }

  render() {
    return (
      <div className="App">
        <h1>3 + 5 + 7 = {this.state.v1}</h1>
        <h1>3 - 5 = {this.state.v2}</h1>
        <button onClick={this.calculate.bind(this)}>开始计算</button>
      </div>
    )
  }

  calculate() {
    import('./math').then(({add, subtract}) => {
      this.setState({v1: add(3, 5, 7)})
      this.setState({v2: subtract(3, 5)})
    })
  }
}


export default App;
