import React, { Fragment } from 'react';
import './App.css';

/*
const Columns = () => (
  <>
    <td>小明</td>
    <td>24</td>
  </>
)
*/


const Columns = () => (
  <Fragment>
    <td>小明</td>
    <td>24</td>
  </Fragment>
)


const App = (props) => (
  <table>
    <tr>
      <Columns />
    </tr>
  </table>
)


export default App
