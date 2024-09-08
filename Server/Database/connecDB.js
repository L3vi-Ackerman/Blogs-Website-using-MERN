const mongoose = require('mongoose')

const connectDB = async(url)=>{
    try {
       await mongoose.connect(url);
       console.log("Connected to database!");
    } catch (error) {
        console.log("Error in connectDB.js: ",Error)
    }
}

module.exports = connectDB;