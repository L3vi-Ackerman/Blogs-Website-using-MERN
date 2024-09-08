require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT;
const router = require('./Router/router');
const connectDB = require('./Database/connecDB');
const url = process.env.DB_URL;

app.use(cors());
app.use('/api',router);
const start = async ()=>{
    try {
        await connectDB(url);
        app.listen(port,()=>{
            console.log("listening to port : ",port)
        })
    } catch (error) {
        console.log("Error in App.js: ",error)
    }
}
start();