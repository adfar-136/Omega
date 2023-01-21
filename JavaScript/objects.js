// let school = {
//     name : "Knowledge Hut",
//     location :"online",
//     educator : "Adfar Rasheed",
//     age : 25,
//     salary : 250000
// }
// console.log(school["name"])
// console.log(school.educator)

// var school = new Object()
// school.name = "Knowledge Hut"
// school.educator = "Adfar Rasheed"


// console.log(school)
// let school = {
//     name : "Knowledge Hut",
//     location :"online",
//     educator : "Adfar Rasheed",
//     age : 25,
//     salary : 250000
// }
// school.salary = 100000
// console.log(school)
// console.log(school.location)
// delete school.salary
// console.log(school)
// console.log(school["name"])
// for (let key in school){
//     console.log(key)
//     console.log(school.age)
// }


// var employee = {
//     eid : 1,
//     ename : "Adfar",
//     eaddress : "Kashmir",
//     esalary : 10000
// }
// // console.log("Employee : ",employee)
// // var newEmployee = employee
// // var newEmployee = {...employee}
// var newEmployee = Object.assign({},employee)
// // console.log("New Employee : ",newEmployee)
// newEmployee.ename = "Syed"
// console.log("New Employee : ",newEmployee)
// console.log("Employee : ",employee)
// employee.ename = "Adfarr"
// console.log("New Employee : ",newEmployee)
// console.log("Employee : ",employee)


var employee = {
    eid : 1,
    ename : "Adfar",
    eaddress : "Kashmir",
    esalary : 10000
}

var arrKeys = Object.keys(employee)
var arrValues = Object.values(employee)
console.log(arrKeys)
console.log(arrValues)
