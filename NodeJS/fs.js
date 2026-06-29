
const fs = require('fs')

// fs.readFile('hello.txt' , 'utf-8' ,(err , data)=>{
// console.log("Data :" + data)
// })

// fs.appendFile('hello.txt','Bharath' ,(err,data)=>{
//     // console.log(data)
// })

// fs.readFile('hello.txt', 'utf8' ,(err,data)=>{
//     console.log(data)
// })

// fs.writeFile('hello.txt' , 'i m teaching for Btech' ,(err,data)=>{
//     console.log(data)
// })

// fs.mkdir('bharath' , (err)=>{
//    if(err){
// console.log(err)
//    }
// })
fs.readdir('bharath' ,(err)=>{
   if(err){
    console.log(err)
   }
})
fs.rmdir('bharath',(err)=>{
    if(err){
console.log(err)
    }
})