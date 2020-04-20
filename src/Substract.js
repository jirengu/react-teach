import React from 'react'
import {subtract} from './math'

export default function() {
  return <h1>3 - 5 = {subtract(3, 5)}</h1>
}