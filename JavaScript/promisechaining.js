let promise = new Promise((resolve,reject)=>{
    resolve("Adfar Rasheed")

})
promise.then(
    new Promise((resolve,reject)=>{
        return setTimeout(()=>{
            resolve("adfar")
        },1000)
        
    }).then((result1)=>{
        console.log(result1)
    })
).then((result2)=>{
    console.log(result2)
})