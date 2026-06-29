const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
      user:'text@gmail.com',
      pass:'you paswword'
    },
    tls:{
        rejectUnauthorized:false
    }

})
transporter.sendMail({
    from:"test@gmail.com",
    to:"test@gmail.com",
    subject:"This is test Email",
    text:" Hello Greetings from Bharath ,/n this mail is regarding to test Mail Services"
},(err,data)=>{
if(err){
    console.log(err)
}else{
    console.log("Message sent Sucessfully")
}
})