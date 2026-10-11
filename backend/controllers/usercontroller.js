import validator from "validator"
import usermodel from "../models/usermodel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const createtoken = (id) =>{
   return jwt.sign({id},process.env.JWT_SECRET)
}




const loginuser = async (req,res)=>{

   try{

      const {email,password}=req.body;

      const user = await usermodel.findOne({email});

      if(!user){
         req.json({success:false,message:"user not found!!"})
      }

      const ismatch=await bcrypt.compare(password,user.password);

      if(!ismatch){
         req.json({success:false,message:"wrong password!!"});
      }
      else{
         const token = createtoken(user._id);
         res.json({success:true,token});
      }




   } catch (error){
          console.log(error);
          res.json({success:false,message:error.message});
   }

}
const registeruser = async (req,res)=>{

    try{

        const {name,email,password} = req.body;

        // check if the user already exist
        
        const exists= await usermodel.findOne({email});
        if (exists){
           return res.json({success : true , message : "user already exist "});
        }

        if(!validator.isEmail(email)){
           return res.json({success : true , message : "invalid email  "});
        }

        if(password.length < 8 ){
           return res.json({success : true , message : "password less than eight charachter  "});
        }

        const salt= await bcrypt.genSalt(10);
        const hashedpassword= await bcrypt.hash(password,salt);
        
        const newUser=  new usermodel ({
            name,
            email,
            password:hashedpassword
        })

        const user = await newUser.save();
        const token = createtoken(user._id);

        res.json({success:true,token});

         }catch(error){
            console.log(error);
            res.json({success:false,message:error.message});
    }



}

const adminlogin = async (req,res)=>{

}

export {loginuser,registeruser,adminlogin};