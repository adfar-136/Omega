import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'

export default function NewsFunctional() {
    const [News, setNews] = useState([])
    let GetNews = async()=>{
       let data =await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-02-04&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
       let jsondata =  await data.json()
       setNews(jsondata.articles)
    }
    useEffect(()=>{
        GetNews()
    })
  return (
    <div className='container my-3'>
      <h2>AdfarNews Website- Top Headlines</h2>
      <div className="row">
        {News.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <Newsitem url ={element.url} title={element.title} 
            urlToImage={element.urlToImage} description={element.description}/>
            </div>
        })}
        </div>
      </div>
  )
}
