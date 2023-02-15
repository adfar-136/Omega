import React, { Component } from 'react'

export default class Cheader extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.data.welcome}</h1>
        <h2>{this.props.data.title}</h2>
        <h2>{this.props.data.author}</h2>
      </div>
    )
  }
}
