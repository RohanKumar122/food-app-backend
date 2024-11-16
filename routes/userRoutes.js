const express =require('express')
const router =express.Router()
const User =require('../Models/User')

router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newUser =new User(data)
        const savedUser =await newUser.save()
        console.log("User added successfully")
        res.status(200).json(savedUser)
    }
    catch(err){
        console.log('Error in saving User',err)
        res.status(500).send(err) 
    }
})  

router.get('/',async(req,res)=>{ 
    try{
        const data =await User.find()
        console.log("User fetched successfully")
        res.status(200).json(data)
    }
    catch(err){
        console.log('Error in getting User',err)
        res.status(500).send(err) 
    }              
})

module.exports=router