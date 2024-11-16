// step 1: import mongoose
const mongoose = require('mongoose');

// step 2: define schema
const PersonSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    work:{
        type: String,
        enum:['chef','waiter','cook'],
        default:'Profession',
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    }

})

// step 3: create model
const Person = mongoose.model('Person',PersonSchema);
// step 4: export model
module.exports=Person
