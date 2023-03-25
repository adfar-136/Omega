const path = require("path")
// const dirname = path.dirname("C:/Users/LEGION/Desktop/Batches/Omega/Backend/path/index.js")
// console.log(path.extname("C:/Users/LEGION/Desktop/Batches/Omega/Backend/path/index.html"))
// console.log(path.basename("C:/Users/LEGION/Desktop/Batches/Omega/Backend/path/index.html"))
// const myPath = path.parse(("C:/Users/LEGION/Desktop/Batches/Omega/Backend/path/index.html"))
// console.log(myPath)
const mypath = path.format({
    root:"/ignored/",
    dir:"/adfar/syed/random/vaibhav",
    base:"index.js",
    ext:"ignored",
    name:"ignored"
})
console.log(mypath)