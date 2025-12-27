import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true, select:false},
    email:{type:String,required:true},
    salt: {type:String, select: false},
    sessionToken: {type:String, select: false},
});

export const User=mongoose.model("User",userSchema);
