// var promise = new Promise(function(resolve,reject){
//     const x = "Adfar"
//     const y = "efAdfar"
//     if(x===y){
//         resolve()
//     } else {
//         reject()
//     }
// })
// promise.then(function(){
//     console.log("sucess, promise resolved")
// }).catch(function(){
//     console.log("some error, promise rejected");
// })

var promise = new Promise(function(resolve,reject){
    reject('Adfar')
})
promise.then(function(result){
    console.log(result)
},function(error){
    console.log(error)
})