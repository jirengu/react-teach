import React, { Component } from 'react';
import './App.css';


const ThemeContext = React.createContext()

class Button extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div className="button" style={{ background: this.context }}>
        button
      </div>
    );
  }
}

//Button.contextType = ThemeContext

const ThemeButton = (props) => (
  <div>
    <Button />
  </div>
)

const Toolbar = (props) => (
  <div>
    <ThemeButton />
  </div>
)

const App = (props) => (
  <ThemeContext.Provider value="yellow">
    <Toolbar />
  </ThemeContext.Provider>
)


export default App
