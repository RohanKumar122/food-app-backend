const express =require('express')
const router =express.Router()
const MenuItem =require('../Models/Menu')

router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newMenuItem =new MenuItem(data)
        const savedMenuItem =await newMenuItem.save()
        console.log("Menu Item added successfully")
        res.status(200).json(savedMenuItem)
    }
    catch(err){
        console.log('Error in saving Menu Item',err)
        res.status(500).send(err) 
    }
})

router.get('/',async(req,res)=>{ 
    try{
        const data =await MenuItem.find()
        console.log("Menu Item fetched successfully")
        res.status(200).json(data)
    }
    catch(err){
        console.log('Error in getting Menu Item',err)
        res.status(500).send(err) 
    }
})

module.exports=router