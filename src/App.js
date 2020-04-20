import React, { Component } from 'react'
import './App.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null }
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    console.log(error)
    console.log(errorInfo)
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
 
    return this.props.children
  }  
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }
  
  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!')
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

function App() {
  return (
    <div>
      <p>
        点击计数器
      </p>
      <hr />
      <ErrorBoundary>
        <p>两个计数器使用同一个Boundary</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>两个计数器使用不同的Boundary</p>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
    </div>
  )
}


export default App
