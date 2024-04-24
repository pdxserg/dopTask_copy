

// push(), pop(), shift(), unshift()   ------ mutate (changes)  the array

//🟩❗  pop()------ remove last element of array then return it

// const names = ['Alex', 'Bob', 'Ivan', 'Darren']
// const shiftName= names.shift()
//
//🟩❗ ️shift() -remove first element and return their value

// const names = ['Alex', 'Bob', 'Ivan', 'Darren']
// const shiftName= names.shift()
// console.log("shiftnames :", shiftName)
// //->Alex
// console.log(names)
// //->[ 'Bob', 'Ivan', 'Darren' ]

//🟩❗ unshift() -add 1 or more element (in start of array) then return new length array

// const names = ['Alex', 'Bob', 'Ivan', 'Darren']
// const unshiftName= names.unshift('Test1', 'Test2')
// console.log('unshiftName: ', unshiftName) ->unshiftName:  6
// console.log('names: ',names) ->names:  [ 'Test1', 'Test2', 'Alex', 'Bob', 'Ivan', 'Darren' ]

//🟩❗reverse()-  revers
// const names = ['Alex', 'Bob', 'Ivan', 'Darren']
//  const reversName= names.reverse()
// console.log(names) ->[ 'Darren', 'Ivan', 'Bob', 'Alex' ]

//🟩❗split() change string to the array

// const str= "ab-cd-ec"
// const result = str.split()
// console.log(result)
// //[ 'ab-cd-ec' ]

// const str= "ab-cd-ec"
// const result = str.split("-")
// console.log(str) //ab-cd-ec
// console.log(result) //[ 'ab', 'cd', 'ec' ]

// const str= "ab-cd-ec"
// const result = str.split("", 5)
// console.log(str) //ab-cd-ec
// console.log(result)//[ 'a', 'b', '-', 'c', 'd' ]


//🟩❗.join() --join elements of array

//const names = ['Alex', 'Bob', 'Ivan', 'Darren']
//  const joinName= names.join("-")
// console.log(names) //   [ 'Alex', 'Bob', 'Ivan', 'Darren' ]
// console.log(joinName) //Alex-Bob-Ivan-Darren

// const joinName1= names.join("")
// console.log(joinName1)// AlexBobIvanDarren

// let tel= "1234567"
// let rev= tel.split('').reverse().join("")
// console.log(rev) //7654321

//🟩❗ .concat() - method array(combine)
// const arr1= [1,2,3,4]
// const arr2= [5,6,7,8]
// const arr3= [9,10,11]
//
// const res = arr1.concat(arr2,arr3,[20,21])
// console.log(res)//[1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 20, 21]

//🟩❗.flat()- open inner array
// const arr1= [1,2,[3,4]]
// const res = arr1.flat(Infinity)
// console.log(res)//[ 1, 2, 3, 4 ]

//🟩❗.forEach(function(el, index, array){})
// const arr = [1,2,3,4]
// let sum =0
// arr.forEach(function(el){
//     sum += el //sum = sum+ el
// })
// console.log(sum) //10

//🟩❗.find()

// const words = ['abc', 'apple','wall', 'testimony', 'ball']
// const res =  words.find(function (el){
//     return el.length > 4
// })
// console.log(res)//apple

//🟩❗.includes -- checked array (true  or false)
// const arr = [1,2,3,4]
// console.log(arr.includes(3)) // true

//🟩❗.filter method array return new array
// const words = ['abc', 'apple','wall', 'testimony', 'ball']
// const res = words.filter((el)=> el.length >=5,  )
// console.log(res)//[ 'apple', 'testimony' ]

//🟩❗.sort() -- method  for ASCII

// const words = ['abc', 'Apple','wall', 4, 'Ball', 20]
// console.log(words.sort())//[20, 4, 'Apple', 'Ball', 'abc', 'wall' ]

//const numbers = [5,1,48,-200, 45,1]
// const comparFunction= (a, b)=>{
//     if(a > b){
//         return 1
//     }else {
//         return -1
//     }}
// console.log(numbers.sort(comparFunction))//[ -200, 1, 1, 5, 45, 48 ]

// const res= numbers.sort((a,b)=> a-b)
// console.log(res)//[ -200, 5, 1, 45, 45, 1 ]
// const res1= numbers.sort((a,b)=> b-a)
// console.log(res1)//[ 48, 45, 5, 1, 1, -200 ]

//🟩❗. map
//
// const tasks = [
//     {id: 1, title: "html", isDone: true},
//     {id: 2, title: "css", isDone: true},
//     {id: 3, title: "react", isDone: false},
//     {id: 4, title: "js", isDone: false},
//     {id: 5, title: "node", isDone: false},
// ]
//  const t = tasks.map((t)=>t.title)
// console.log(t)
// const a = {id: 2, title: "css", isDone: true}
// const newTasks = [a, ...tasks]
// console.log(newTasks)