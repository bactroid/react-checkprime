import React from 'react'
import './InputForm.css'
import TextField from 'material-ui/TextField'

const InputForm = ({num, handler}) => (
  <form id='input-form'>
    <TextField
      hintText='Please input an integer'
      type='text'
      name='num'
      onChange={handler}
      defaultValue={num}
    />
  </form>
)

export default InputForm
