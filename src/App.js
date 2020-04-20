import React, { Component } from 'react';
import './App.css';

function First(props) {
  return <fieldset>
    <legend>first name </legend>
    <input value={props.value} onChange={props.onChange}/>
  </fieldset>
}

function Last(props) {
  return <fieldset>
    <legend>last name </legend>
    <input value={props.value} onChange={props.onChange}/>
  </fieldset>
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      first: 'af',
      last: 'b'
    }    
  }
  
  render() {
    return (
      <div>
        <First value={this.state.first} onChange={(e)=>{this.setState({first: e.target.value})}}/>
        <Last value={this.state.last} onChange={(e)=>{this.setState({last: e.target.value})}} />
        <p>full nane is: {this.state.first + ' ' + this.state.last}</p>
      </div>
    )
  }
}

export default App
