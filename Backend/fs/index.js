const fs = require("fs")
// fs.writeFileSync("adfar.txt","Hello")
// fs.appendFileSync("adfar.txt","Adfar is my name")
// const data = fs.readFileSync("adfar.txt","utf-8")
// fs.renameSync("fs/adfar.txt","fs/adfar1.txt")
// fs.unlinkSync("fs/adfar1.txt")
// fs.rmdirSync("fs")
// const stringdata = data.toString()
// console.log(data)
//Asynchronous file system

// fs.writeFile("adfar.txt","My name is adfar",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file created successfully")
//         console.log(fs.readFileSync("adfar.txt","utf-8"))
//     }
// })
// fs.appendFile("adfar.txt","Hello ADfar",()=>{
//     console.log("appended")
// })
fs.readFile("adfar.txt","utf-8",(err,data)=>{
    console.log(data)
})
fs.unlink("adfar.txt",()=>{})
// fs.writeFileSync("ad.txt","random text")
// console.log(fs.readFileSync("ad.txt","utf-8"))


