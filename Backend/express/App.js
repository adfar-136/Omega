const express = require("express")
const fs = require("fs")
// const path = require("path")
const app = express()
// app.set("view engine","hbs")
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index",{name:"Adfar"})
})
var demo = {
    name:"Adfar",
    age:26,
    salaray :5000
}
app.get("/about",(req,res)=>{
    res.render("about",{demo:demo})
})
var projects ={
    name :"Adfar",
    skills :["HTML","CSS","JS","REACT","NODE"]
}
app.get("/adfar",(req,res)=>{
    res.render("Adfar",{projects:projects})
})



// console.log(__dirname)
// app.get("/",(req,res)=>{
//     console.log(__dirname)
//     res.send("Welcome to Express JS")
// })
// app.use(express.static(path.join(__dirname,"./src")))

// app.get("/about",(req,res)=>{
// const data = fs.readFileSync("adfar.html","utf-8")

//     res.send(data)
// })
// app.get("/html",(req,res)=>{
//     res.write("<h1>Adfar rasheed</h1>")
//     res.write("<h1>Adfar rasheed</h1>")
//     res.write("<h1>Adfar rasheed</h1>")
//     res.write("<h1>Adfar rasheed</h1>")
//     res.write("<h1>Adfar rasheed</h1>")
//     res.write("<h1>Adfar rasheed</h1>")
//     res.send()
// })
// app.get("/temp",(req,res)=>{
//     res.send({
//         id:1,
//         name:"Adfar"
//     })
// })
// app.get("/section",(req,res)=>{
//     res.json([{
//         id:1,name:"Adfar",
//     },{
//         id:2,name:"Syed"
//     }])
// })
app.listen(4000,()=>{
    console.log("listening to 4000 port")
})