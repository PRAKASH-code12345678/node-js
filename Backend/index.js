import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoutes from './routes/user.js'
import blogRoutes from './routes/blog.js'
import cors from "cors"




const app=express();
dotenv.config()
const port=process.env.PORT

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// app.get('/',(req,res)=>{
//     res.send("hello");
    
// })
// app.use(express.json)
app.use(express.json())
app.use("/user",userRoutes)
app.use("/blog",blogRoutes)
app.use (cors());

    
try{
//////ab mongodb connect karenge
await mongoose.connect(process.env.MONGO_URI);
console.log("connect to mongodb");

    app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    })
}catch(error){
    console.log(error.message);
    

}