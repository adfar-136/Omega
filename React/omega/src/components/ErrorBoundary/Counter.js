import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {counter:0}
    }
    handleclick=()=>{
        this.setState({counter:this.state.counter+1})
    }
  render() {
    if(this.state.counter === 5){
        throw new Error("Crashed!!!!! Khatam")
    }
    return (
      <div>
        <h1 onClick={this.handleclick}>{this.state.counter}</h1>
      </div>
    )
  }
}
