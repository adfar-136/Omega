import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
         <img src={this.props.urlToImage} alt="adfar" className="card-img-top"/>
        <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-text">{this.props.description}</p>
       <a href={this.props.url} className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
