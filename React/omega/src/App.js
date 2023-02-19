import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      firstname:"Addddfar",
      day : 0
    }
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps,nextState)
    if(nextState.day >= 14){
      return false
    } else {
      return true
    }
  }
  Challenge=()=>{
    this.setState({
      day:this.state.day+1
    })
  }
  componentDidUpdate(prevProps,prevState){
    console.log(prevState)
    if(prevState.day === 10){
      this.setState({
        firstname:"Challenge has been succesasfuly comp[leted"
      })
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.day}</h1>
        <h2>{this.state.firstname}</h2>
        <button onClick={this.Challenge}>Challenge</button>
      </div>
    )
  }
}
