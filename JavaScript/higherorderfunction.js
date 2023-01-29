// const greet = function(name){
//     return function(m){
//         console.log(`hi! ${name}, ${m}`)
//     }
// }
// // const adfar = greet('ABC')
// // adfar("Welcome")
// greet('ABC')('Adfar')

function greet(name){
    return `hi ${name}`
}
function greet_name(greeting,message,name){
    console.log(`${greeting(name)} ${message}`)
}
greet_name(greet,'Hello World','Adfar')