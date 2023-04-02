const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const studentArray = require("./InitialData")
var currentId = studentArray.length;
// app.use(express.json())
app.use(bodyParser.json())
app.get("/api/students",(req,res)=>{
    res.json(studentArray)
})
app.get("/api/students/:id",(req,res)=>{
    let id = req.params.id;
    if(!isNaN(id)){
        id=parseInt(id)
        let studentObject = studentArray.find((e)=>{
            return (e.id === id)
        })
        if(studentObject === undefined || studentObject === {}){
            return res.sendStatus(404)
        }else {
            return res.json(studentObject)
        }
    } else{
        return res.sendStatus(400)
    }
})
app.post("/api/students",(req,res)=>{
    let reqkeys = Object.keys(req.body)
    if(reqkeys.find((e)=> {return e ==="name"}) && 
    reqkeys.find((e)=>{return e === "currentClass"}) && 
    reqkeys.find((e)=>{return e === "division"})){
        if(!isNaN(req.body.currentClass)){
            let name = req.body.name;
            let currentClass = req.body.currentClass;
            let division= req.body.division;
            currentId++;
            studentArray.push({id:currentId,name:name,currentClass:currentClass,
                division:division})
                return res.json({id:currentId})
        } else{
            return res.sendStatus(400)
        }
    }
    else{
        return res.sendStatus(400)
    }
})
app.put("/api/students/:id",(req,res)=>{
    if(!isNaN(req.params.id)){
        let id = parseInt(req.params.id)
        let studentObjectOld = studentArray.find((e)=>{
            return e.id === id
        })
        if(studentObjectOld === undefined){
            return res.sendStatus(404)
        }
        else {
            let updateObject = req.body;
            if(Object.keys(updateObject).find((e)=>{
                return e === "currentClass"
            })){
                if(!isNaN(updateObject.currentClass)){
                    updateObject.currentClass = parseInt(updateObject.currentClass)
                } else {
                    return res.sendStatus(400)
                }
            }
            let std = {...studentObjectOld,...updateObject}
            let index = studentArray.indexOf(studentObjectOld)
            studentArray.splice(index,1)
            studentArray.push(std)
            res.sendStatus(200)
        }
    }
    else {
        return res.sendStatus(400)
    }
})
app.delete("/api/students/:id",(req,res)=>{
     let id = req.params.id;
     if(!isNaN(id)){
        id = parseInt(id)
        let studentOld= studentArray.find((e)=>{
            return e.id === id
        })
        if(studentOld !== undefined){
            let index = studentArray.indexOf(studentOld)
            studentArray.splice(index,1)
            return res.sendStatus(200)
        }
        else {
            return res.sendStatus(404)
        }
     } else {
        return res.sendStatus(400)
     }
})
app.listen(5000,()=>{
    console.log("Listening to 5000 port")
})