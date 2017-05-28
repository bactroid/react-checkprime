import React from 'react'
import ReactDOM from 'react-dom'
import Factors from './Factors'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Factors />, div)
})
