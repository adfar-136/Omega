// console.log("1")
// const getData=async()=>{
//     var data = "Adfar rasheed"
//     return data
// }
// getData().then(data=>console.log(data))
// console.log("3")


// const getData=async()=>{
//     var y= await "Hello Adfar"
//     console.log(y)
// }
// getData()

function omega(){
    let first_promise = new Promise((resolve,reject)=>{
        resolve("Hello")
    })
    let second_promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Adfar")
        },1000)
    })
    let combined_promise = Promise.all([first_promise,second_promise])
    return combined_promise;
}

async function batch(){
    let data = await omega()
    console.log(data)
}
batch()












