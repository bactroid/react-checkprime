import React, { Component } from 'react'
import InputForm from './InputForm'
import Result from './Result'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {num: ''}
    this.handler = this.handler.bind(this)
  }

  handler (e) {
    this.setState({
      num: parseInt(e.target.value, 10)
    })
  }

  render () {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <AppBar title={'Checking for Prime Numbers'} />
          <InputForm num={this.state.num} handler={this.handler} />
          <Result num={this.state.num} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
