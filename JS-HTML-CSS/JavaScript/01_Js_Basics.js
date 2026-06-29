// Variables-> container to store data
    // const-> constant variable (value cannot be changed)
    // let-> variable (value can be changed)
    // var-> variable (value can be changed) (not recommended to use)

// Data types
    // String-> text data (enclosed in single or double quotes)
    // Number-> numeric data (integer or floating-point)
    // BigInt-> represents integers with arbitrary precision
    // Boolean-> true or false
    // Null-> represents the absence of any value
    // Undefined-> represents a variable that has been declared but not assigned a value
    // symbol-> a unique and immutable data type used as an identifier for object properties

const a= 10
const b= 20
const c= 30
const d= 40

const sum = a + b //30
const sum2 = c + d //70

console.log(sum>50 && sum2>50) // false && true => false
console.log(sum<50 || sum2<50) // true || false => true
console.log(sum>100 || sum2>100) // false || false => false

