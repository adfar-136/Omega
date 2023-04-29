const passport = require("passport")
var express = require("express")
var app = express()
const {hashSync, compareSync} = require("bcrypt")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
require("./passport")
app.use(passport.initialize())
const UserModel = require("./database")
const jwt = require("jsonwebtoken")
app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/register",async (req,res)=>{
    const user1 =await UserModel.findOne({username:req.body.username})
  if(user1) return res.status(400).send("User already exists")
    const user = new UserModel({
        username: req.body.username,
        password: hashSync(req.body.password,10)
    })
    user.save().then(
        user => {
           res.send({
            success: true,
            message:"User register successfully"
           }) 
        }
    ).catch(err=>{
        res.send({
            success: false,
            message: "something went wrong"
        })
    })
})
app.post("/login",(req,res)=>{
    UserModel.findOne({username:req.body.username}).then(user=>{
        if(!user){
            return res.status(401).send("could not find user")
        }
        if(!compareSync(req.body.password,user.password)){
            return res.status(401).send({
                success: false,
                message: "incorrect password"
            })
        }
        const payload = {
            username:user.username,
            id:user.id
        }
      const token = jwt.sign(payload,"secret",{expiresIn:"1d"})
      return res.status(200).send({
        success: true,
        message:"Logged in successfully",
        token : "Bearer " + token
      })
        
    })
})
app.get("/profile",passport.authenticate("jwt",{session:false}),
(req,res)=>{
    res.send("welcome")
}
)
app.listen(5000,()=>{
    console.log("listening to 5000 port")
})