 import express from 'express'
 import cors from 'cors'
 import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectcloudinary from './config/cloudinary.js'
import userrouter from './routes/userrouter.js';
import productRouter from './routes/productrouter.js'
import { v2 as cloudinary } from 'cloudinary';

 // app config
 const app=express()
 const port = process.env.PORT || 4000
 connectDB()
 connectcloudinary()

 //middleware

 app.use(express.json())
 app.use(cors())

 //api endpoints 
 app.use('/api/user', userrouter);
 app.use('/api/product',productRouter);

 app.get ('/',(req,res)=>{
    res.send("API working ");
 })
 app.get('/test-cloudinary', async (req,res)=>{
    try{
        const result = await cloudinary.api.ping();

        console.log(result);

        res.json(result);

    }catch(error){

        console.log(error);

        res.json(error);
    }
})

 app.listen(port,()=>console.log("server started on port :" + port))