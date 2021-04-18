import React, { Component } from 'react'

export default class Keypad extends Component {
  
  handleChange = () => {
    
  }
  render() {
    return (
      <div>
        <input type="password" onChange={this.handleChange}/>
      </div>
    )
  }
}