const fs= require("fs")
// let data = " "
// let readStream = fs.createReadStream("ad.txt")
// readStream.on("data",function(chunk){
//     data+=chunk
// })
// readStream.on("end",function(){
//     console.log(data)
// })
// readStream.on("error",function(err){
//     console.log(err)
// })
// let data = "ADfar Rasheed"
// let writeStream = fs.createWriteStream("output.txt")
// writeStream.write(data,"utf-8")
// writeStream.end()
// writeStream.on("finish",function(){
//     console.log("writing completed")
// })

let readStream =fs.createReadStream("ad.txt")
let writeStream = fs.createWriteStream("output.txt")
readStream.pipe(writeStream)





