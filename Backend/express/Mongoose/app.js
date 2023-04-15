var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Omega").then(
    ()=>{console.log("connected to MongoDB")}
).catch((err)=>{
    console.log(err)
})
var student = new mongoose.Schema({
    name: String,
    workout: Boolean,
    age : Number
})
//collection => model
const Student = new mongoose.model("Student",student)
//assign value to your model
// const adder = ()=>{
//    const adfar = new Student({
//     name:"Adfar",
//     workout:false,
//     age:25
//    })
//    adfar.save()
// }
// const adder = ()=>{
//     const adfar =  Student.create({
//      name:"Satyam",
//      workout:true,
//      age:30
//     })
    
//  }
const adder = async()=>{
    const adfar =await Student.find({age:{$gt:15}})
    // const adfar =await Student.find({name:"Adfar"})
    console.log(adfar)
 }
adder()