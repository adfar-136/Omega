// const http = require("http")
// http.createServer((request, response)=>{
    
//     response.write("<h1>Adfar starts Http</h1><h4>agvdhd</h4>")
//     response.end()

// }).listen(4000)
// const fs =require("fs")
// const http = require("http")
// http.createServer((req,res)=>{
//     const data =fs.readFileSync("adfar.html","utf-8")
//     res.end(data)
// }).listen(8000,()=>{
//     console.log("listening to 8000 port")
// })
const fs =require("fs")
const http = require("http")
const server = http.createServer((req,res)=>{
    const home = fs.readFileSync("index.html","utf-8")
    const about = fs.readFileSync("about.html","utf-8")
    const contact = fs.readFileSync("contact.html","utf-8")
    const adfar = fs.readFileSync("adfar.html","utf-8")
    const image = fs.readFileSync("cat.jpeg")
    if(req.url === "/"){
        res.end(home)
    }else if(req.url === "/about"){
        res.end(about)
    }else if(req.url === "/contact"){
        res.end(contact)
    }else if (req.url === "/adfar"){
        res.end(adfar)
    } else {
        console.log(image)
        res.end(image)
    }
})
server.listen(3000,()=>{
    console.log("listening to port 3000")
})











