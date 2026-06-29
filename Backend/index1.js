const express1=require('express')
const mongoose=require('mongoose')
const Krishna=require('./studentModel')
const app=express1()
app.use(express1.json())

mongoose.connect('mongodb://localhost:27017/kkc')
.then(()=>console.log("Data base connected"))
.catch((err)=>console.log(err))

app.post("/addstudent", async (req,res)=>{
    try{
        const studentData = await Krishna.create(req.body);

        res.status(201).json({
            message: "Data saved successfully",
            data: studentData
        });

    }catch(error){
        res.status(400).json(error);
    }
});


app.get("/getstudent/:id",async(req,res)=>{
    try{
        const student = await Krishna.findById(req.params.id);
        res.status(201).json({
    message: "Data saved successfully"
});
    }catch(error){
        res.status(400).json(error)
    }
});

app.listen(4500, () => {
  console.log("server started");
});