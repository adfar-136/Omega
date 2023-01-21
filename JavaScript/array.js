// var arr = [1,2,3,4,5,6,7,8]
// console.log(arr[4])
// var arr = []
// arr[0]=2;
// arr[1]=3;
// arr[2]=6;
// arr[30]=67;
// console.log(arr[16])

// let arr = [1,2.4,3,4,5,6,7,8,6]
// console.log(arr)
// arr[2]=14
// arr[5]='adfar'
// arr[4]="omega"
// arr[7]=5.2;
// console.log(arr)

// var arr = [
//     [1,2,3,"a","b"],
//     [3,4,"a","b","c"],
//     [1,2,3,4,5,6]
// ]

// console.log(arr[1][3])

// var arr = [1,2,3,[3,4,5],[3,4,5],'a']
// console.log(arr[3][1])

// var arr = [1,3,5,6,3,8,9];
// arr.push(100,2,4,"a")
// arr.push(100)
// arr.push([3])
// var last = arr.pop()
// var last = arr.pop()
// var last = arr.pop()

// console.log(last)
// var arr = [1,3,5,6,3,4,4,5,5,6,6,5,43,8,9];
// console.log(arr.length)
// console.log(arr)
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// for(let x of arr){
//     console.log(x)
// }


// var arr = [1,3,5,6,3,4,4,5,5,6,6,5,43,8,9];

// var arr1 = arr.slice(3,7)
// console.log(arr1)


// var arr = [1,2,3,4,5,6,7,8,9]
// // arr.splice(4,3)
// // arr.splice(4)
// // arr.splice(4,2,25,5,6,7,4)
// var a = arr.splice(4,3,'a','b')
// console.log(a)
 
// var arr = [1,2,3,3,12,23,23,1,1,1,323,3,42,3,32,42,342,42,42,4]
// var a = arr.splice(2)
// console.log(a)
// console.log(arr)

// var a = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// a.splice([1,1],1)
// console.log(a)

// var arr = [1,2,3,4,5]
// var a = arr.shift()
// console.log(a)


// var arr = [1,2,3,4,5]
// arr.unshift("a","b","c")
// console.log(arr)


// var arr1 = [1,2,3,4]
// // var arr2 = [5,6,7,8]
// // var arr3 = [7,8,9,0]

// // // var arr4 = arr1.concat(arr2,arr3)
// // // console.log(arr4)
// // // var arr4 = [].concat(arr1,arr2,arr3)
// var arr4 = arr1.concat([1,2,3,4],[5,6,7,8],[8,9,0,1])
// console.log(arr4)



// var arr = [1,2,3,4,5,6,7,3,8,9]
// console.log(arr.indexOf(3, 5))

// function add(a,b,c){
//     return a+b+c
// }
// console.log(add(4,5,6))

// function add(a,b,c,...other){
//     console.log(other)
//     return a+b+c+other
// }
// console.log(add(4,5,6,687,7,54,4,5,45,45,45,45,456,6,546,464,6,4654,6,46,4,646,4,6))

// function add(...adfar){
//     let sum = 0;
//     for (let i of adfar){
//         sum+=i
//     }
//     return sum
// }
// console.log(add(4,5,6,7,8,9))
// console.log(add(4,5,6,7,8367,65,6,54,535,3,53,53,53,53,5,4,53,53,3,53,9))
// console.log(add(4,5,6,7,8,345,35,3,563,5,5,35,5,4,254,35,4,534,53,459))

// function add(a,b,...c){
//    console.log(a , b)
//    console.log(c)
//    console.log(c[0])
//    console.log(c[2])
//    console.log(c.length)
//    console.log(c.indexOf("Supriya"))
//    console.log("adfar")
// }
// add('Mayur','Adfar','Syed','Vaibhav','Supriya')


// var arr = ["Adfar","Supriya","Vaibhav","Syed"]
// function getNames(name1,name2,name3,name4){
//     console.log(name1,name2,name3,name4)
// }
// // getNames(arr[0],arr[1],arr[2],arr[3])
// getNames(...arr)

// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1]
// console.log(arr2)
// let newArr = [...arr1,...arr2]
// console.log(newArr)

// var arr = [1,54,3,54,2,5,4,64,2,544,6,57,5,345,34]
// console.log(arr.includes(54,12))

// var arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.join('|'))
// console.log(arr.join(','))
// console.log(arr.join(" "))
// console.log(arr.join(""))


// var str = "My name is Adfar Rasheed"
// var arr = str.split(" ")
// var arr1 = str.split("a")
// console.log(arr)
// console.log(arr1)

// var arr = [3,5,7,9,1,32,43,5,34,42,43,4]
// var newarr = arr.map(function(x,i){
//     console.log(i)
//     return x>=14
// })
// // var newarrr = newarr.map(x=>x*x)
// console.log(newarr)
// console.log(newarrr)

// let numbers = [20,5.2,-120,100,30,0,3]
// function compareFunction(a,b){
//     return a-b
// }
// console.log(numbers.sort(compareFunction))
 
// let names = ["adfar","syed","pooja","vaibhav","basit",undefined]
// console.log(names.sort())
// let arrr = [1,3,2,5,-2,-3,-4]
// function bubblesort(arr){
//     for (var i = 0;i < arr.length; i++){
//         for (var j = 0;j<(arr.length-i-1);j++){
//             if(arr[j] < arr[j+1]){
//                 var temp =arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     console.log(arr)
// }
// bubblesort(arrr)

// var arr =[23,45,12,13,14,45,65,76,23,17]
// function eligible(x){
//     return x>=14
// }
// var newarr= arr.filter(eligible)
// console.log(newarr)
// var arr = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// function isPrime(num){
//     for(let i = 2;num>i;i++){
//         if(num%i === 0){
//             return false
//         }
//     }
//     return num > 1
    
// }
// console.log(arr.filter(isPrime))

// var arr = [10,20,30,40,50,60,70]
// function sumOfArray(total,x){
//     return total + x
// }
// console.log(arr.reduce(sumOfArray,10))


// var arr = [1.5,2.4,11.1,35.7,70.8,5.8]
// function sumOfArray(total,x){
//     return total + Math.round(x)
// }
// console.log(arr.reduce(sumOfArray,0))

var arr = [[1,2],[3,4,[5,6,[7,8,,[6,7,6,6,7,6,7],8,8,8]],[7],8,9]]
console.log(arr.flat(1000))










