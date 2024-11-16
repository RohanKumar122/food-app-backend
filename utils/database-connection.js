const dotenv = require('dotenv').config()

// step 1: import mongoose

const mongoose = require("mongoose");

// step 2: connect mongoose
// const MONGO_URL = "mongodb://localhost:27017/hotels";
const MONGO_URL=process.env.MONGO_URL
mongoose.connect(MONGO_URL);

// step 3: get connection
const db =mongoose.connection;

// step 4: define event listeners (Define Event Listeners for database connection events)
db.on('connected',()=>{
    console.log('[Mongoose] database connected!!');
})
db.on('error',()=>{
    console.log('database error');
})
db.on('disconnected',()=>{
    console.log('database disconnected!!');
})

// step 5: export db
module.exports=db;