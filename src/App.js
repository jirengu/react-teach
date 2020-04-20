import React from 'react';
import './App.css';


const Button = (props) => (
  <div className="button" style={{ background: props.theme }}>
    button
  </div>
)

const ThemeButton = (props) => (
  <div>
    <Button theme={props.theme} />
  </div>
)

const Toolbar = (props) => (
  <div>
    <ThemeButton theme={props.theme} />
  </div>
)

const App = (props) => <Toolbar theme="blue" />;

export default App;
