require('dotenv').config()
const connectDB =  require('./Database/connecDB');
const Blogs = require('./Schema/Model');
const data = require('./Blogs.json');

const start = async()=>{
    try {
        await connectDB(process.env.DB_URL);
        await Blogs.create(data);   
        console.log('Data stored in the database!');
    } catch (error) {
        console.log("Error in Blogs.js: ",error)
    }
}
start();