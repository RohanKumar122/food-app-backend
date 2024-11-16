const express =require('express')
const router =express.Router()
const Person =require('../Models/Person')


router.get('/',async(req,res)=>{ 
    try{
        const data =await Person.find()
        console.log("Person fetched successfully")
        res.status(200).json(data)
    }
    catch(err){
        console.log('Error in getting Person',err)
        res.status(500).send(err) 
    }
})

//  Paramerised Route

router.get('/:workType', async (req, res) => {
    try{
        const workType=req.params.workType
        if(workType=='chef' || workType=='waiter' || workType=='cook'){
            const data =await Person.find({work:workType})
            console.log("Person fetched successfully")
            res.status(200).json(data)
        }
        else{
            res.status(404).send("Invalid work type")
        }
    }catch(err){
        console.log('Error in getting Person',err)
        res.status(500).send(err)
    }
})

// 1. OLD METHOD (callback function method)  --> not in use now , instead we use async await

// app.post('/person',(req,res)=>{
//     const data=req.body

//     // Method 1
//     // const newPerson =new Person();
//     // newPerson.name=data.name
//     // newPerson.age=data.age
//     // newPerson.work=data.work
//     // newPerson.mobile=data.mobile
//     // newPerson.email=data.email
//     // newPerson.salary=data.salary

//     // Method 2
//     const newPerson =new Person(data)
    
//     newPerson.save((err,savedPerson)=>{
//         if(err){
//             console.log('Error in saving Person',err)
//             res.status(500).send(err)
//         }
//         else{
//             console.log("Person added successfully")
//             res.status(200).json(savedPerson)
//         }
//     })  
// })

// 2. NEW METHOD (async await method)

router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newPerson =new Person(data)
        const savedPerson =await newPerson.save()
        console.log("Person added successfully")
        res.status(200).json(savedPerson)

    }
    catch(err){
        console.log('Error in saving Person',err)
        res.status(500).send(err) 
    }
})

module.exports=router               