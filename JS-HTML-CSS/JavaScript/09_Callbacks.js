console.log(1)
setTimeout(()=>{
console.log(2)
},0)
console.log(3)

// Callbacks Example


function getData(dataId , getNextData){
    setTimeout(() => {
        console.log("DataId : " + dataId)
        if(getNextData){
            getNextData()
        }
    }, 2000);
}

getData(1 ,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5)
            })
        })
    })
})