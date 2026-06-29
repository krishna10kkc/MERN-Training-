// .foreach()

let num = [2,3,4,5,6,7,8,9]
num.forEach(function(ele){
    console.log(ele)
})

let str = ["kkc","js","array", "mern"]
str.forEach(function(s){
    console.log(s)
})

// map()
let salary = [25000, 35000 ,40000,50000] 
salary.map(function(incr){
    console.log(incr+(incr*(3/100)))
})

//filter
let even = num.filter(i=>{
    return i % 2 ===0
    
})
console.log(even)

// find
let num = [2,3,4,5,6,7,8,9,40]
let large = num.find( i => {
    return i>5
    
})
console.log(large)

// reduce()
let arr=[10,20,30,40]
let total = arr.reduce(function(i,sum){
    return i+sum
})
console.log(total)