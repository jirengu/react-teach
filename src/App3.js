import React, { Component, Suspense } from 'react';
import './App.css';

const ThemeContext = React.createContext()

const Button = (props) => {
  return (
    <ThemeContext.Consumer>
      {val => (
        <div
          className="button"
          style={{ background: val.bgColor, borderColor: val.borderColor }}
        >
          button
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

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

const theme = { bgColor: "red", borderColor: "pink" }

const App = (props) => (
  <ThemeContext.Provider value={theme}>
    <Toolbar />
  </ThemeContext.Provider>
)

export default App
