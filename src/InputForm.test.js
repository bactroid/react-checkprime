import React from 'react'
import ReactDOM from 'react-dom'
import InputForm from './InputForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<InputForm />, div)
})
