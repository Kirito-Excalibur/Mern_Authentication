

const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:2701/full-mern-stack')

app.post('/api/register',async (req,res)=>{
   console.log(req.body)
   try{
const user=await User.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
})
    res.json({status:'ok'})
   }catch (err){
    res.json({status:'error',error:'Duplicate Email'})
   }
  
})

app.post('/api/login',async (req,res)=>{
 

 const user=await User.create({
     name:req.body.name,
     email:req.body.email,
     password:req.body.password
 })
     res.json({status:'ok'})
   
 })


app.listen(1337,()=>{
    console.log("Server started on 1337")
})