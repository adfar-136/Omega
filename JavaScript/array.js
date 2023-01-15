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

// function add(...other){
//     let sum = 0;
//     for (let i of other){
//         sum+=i
//     }
//     return sum
// }
// console.log(add(4,5,6,7,8,9))
// console.log(add(4,5,6,7,8367,65,6,54,535,3,53,53,53,53,5,4,53,53,3,53,9))
// console.log(add(4,5,6,7,8,345,35,3,563,5,5,35,5,4,254,35,4,534,53,459))

function add(a,b,...c){
   console.log(a , b)
   console.log(c)
   console.log(c[0])
   console.log(c[2])
   console.log(c.length)
   console.log(c.indexOf("Supriya"))
}
add('Mayur','Adfar','Syed','Vaibhav','Supriya')


























