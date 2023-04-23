const express = require("express")
const passport = require("passport")
const app = express()
const expressSession = require("express-session")
const {connectMongoose, User} = require("./database")
connectMongoose()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const {initializePassport} = require("./passportconfig")
initializePassport(passport)
app.use(expressSession({secret:"secret",resave:false}))
app.use(passport.initialize())
app.use(passport.session())

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("home")
})

app.post("/register",async(req,res)=>{
  const user =await User.findOne({username:req.body.username})
  if(user) return res.status(400).send("User already exists")
  const newUser =await User.create(req.body)
  res.status(201).send(newUser)
})
app.post("/login",(req,res)=>{
  passport.authenticate("local",{successRedirect:"/profile",failureRedirect:"/register"})
})
app.get("/profile",(req,res)=>{
    res.send("logged in successfully")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.listen(4000,()=>{
    console.log("connected to 4000 port")
})