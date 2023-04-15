const mongoose = require("mongoose");
exports.connectMongoose=()=>{
    mongoose.connect("mongodb://localhost:27017/omegapassport")
    .then(()=>{
        console.log("connected to Mongodb")
    }).catch((e)=>{
        console.log(e)
    })
}
const userSchema = new mongoose.Schema({
    name: String,
    username:{
        type: String,
        required: true,
        unique:true
    },
    password: String
}) 
exports.User = mongoose.model("User",userSchema)