import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    articles = []
    constructor(props){
        super(props)
        this.state={
            articles : this.articles
        }
    }
    async componentDidMount(){
        let data =await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-01-26&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
        let jsonData =await data.json()
        console.log(jsonData)
        this.setState({articles:jsonData.articles})
    }
  render() {
    return (
      <div className='container my-3'>
      <h2>AdfarNews Website- Top Headlines</h2>
      <div className="row">
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <Newsitem url ={element.url} title={element.title} urlToImage={element.urlToImage} description={element.description}/>
            </div>
        })}
        </div>
      </div>
       
        
       
    
    )
  }
}
