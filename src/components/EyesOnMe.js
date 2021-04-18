import React, { Component } from 'react'

export default class EyesOnMe extends Component {
  
  
  render() {
    return (
      <div>
        <button onFocus={this.handleFocus}>Eyes on me</button>
      </div>
    )
  }
}