const express = require("express")
var app = express()
const students = require("./Students")
app.use(express.json())
app.get("/",(req,res)=>{
    res.json({message:"Api is working"})
})
app.get("/api/students",(req,res)=>{
    res.json(students)
})
app.post("/api/students",(req,res)=>{
  if(!req.body.email){
    res.status(404)
    return res.json({message:"email is required"})
  }
  const user = {
    id: students.length + 1,
    first_name: req.body.first_name,
    last_name : req.body.last_name,
    email: req.body.email
  }
  students.push(user)
  res.json(user)
})

app.listen(8000,()=>{
    console.log("listening to 8000 port")
})