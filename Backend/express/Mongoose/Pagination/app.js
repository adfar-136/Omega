const express = require("express")
const app = express()
const users = [
    {
        id:1,
        name:"user1"
    },
    {
        id:2,
        name:"user2"
    },
    {
        id:3,
        name:"user3"
    },
    {
        id:4,
        name:"user4"
    },
    {
        id:5,
        name:"user5"
    },
    {
        id:6,
        name:"user6"
    },
    {
        id:7,
        name:"user7"
    },
    {
        id:8,
        name:"user8"
    },
    {
        id:9,
        name:"user9"
    },
    {
        id:10,
        name:"user10"
    }
]
app.get("/",(req,res)=>{
    res.send("hi")
})
app.get("/users",(req,res)=>{
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page-1)*limit;
    const endIndex = page * limit;
    const result = users.slice(startIndex,endIndex)
    res.json(result)
})
app.listen(3000,()=>{
    console.log("connected to 3000 port")
})