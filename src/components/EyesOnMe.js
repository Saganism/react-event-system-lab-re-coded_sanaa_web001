import React, { Component } from 'react'

export default class EyesOnMe extends Component {
  
  handleFocus = ()=>{
    
  
  render() {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes on me</button>
      </div>
    )
  }
}