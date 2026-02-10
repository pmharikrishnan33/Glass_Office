const User = require('../models/user Model');
const bcrypt=require('bcryptjs')

const createUser=async(req,res)=>{
    const{username,email,password}=req.body;

    if(!username||!password||!email){
        return res.status(400).send("fill all the fields")
    }
    const userExist=await User.findOne({email})
    if(userExist){
        return res.status(400).send("user already exist")
    }

    const salt = bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({uername,email,hashedPassword})
    await newUser.save();
    
}