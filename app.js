const express=require("express");
const mongoose=require("mongoose")
const router=require("./routes/user-routes")

const app=express()
app.use(express.json())
app.use('/api',router)

mongoose.connect("mongodb+srv://Simon:VnRfti_qN6DUydF@new-hope.6kamamm.mongodb.net/mern-auth?retryWrites=true&w=majority").then(()=>{
    app.listen(5000);
    console.log("Database is connected and im listening to port 5000")
}).catch((err)=>console.log(err))