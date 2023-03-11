import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {error:null,errorInfo: null}
    }
    componentDidCatch(error,info){
        this.setState({
            eroor:error,
            errorInfo:info
        })
    }
  render() {
    if(this.state.errorInfo){
        return (
            <div>
              <h2>An error has been occured</h2>
            </div>
          )
    }
    return this.props.children
   
  }
}
