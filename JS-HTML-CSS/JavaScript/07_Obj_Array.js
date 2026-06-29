const pen ={
    name : "cello",
    cp : 20,
    sp : 30,
    color : "black",
    rating : 4
}
pen.cp = 15
console.log(pen)
pen.sp = 25
console.log(pen)
delete pen["color"]
console.log(pen)