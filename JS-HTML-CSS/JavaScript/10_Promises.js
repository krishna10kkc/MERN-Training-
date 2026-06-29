let promise = new Promise((resolve, reject) => {
    let success = true

    if(success){
        resolve("Resolved")
    }else{
        reject("Rejected")
    }
})

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Data is :" + dataId)
            reject("its not fulfilled")
        },30000)
    })
}

// getData(1).then(()=>getData(2)).then(()=>getData(3)).catch((err)=>console.log(err))

