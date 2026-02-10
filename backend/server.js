const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cookieParser=require('cookie-parser')
const cors=require('cors')

dotenv.config();
const port=process.env.PORT||5000;
const app=express()
app.use(express.json())
app.use(cookieParser())

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongoDB connected');
    }catch(err){
        console.log('Error');
        process.exit(1);
        
    }
    
    
}
connectDB()

app.listen(port,()=>{
    console.log('server started');
})