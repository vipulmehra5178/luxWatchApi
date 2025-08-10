import mongoose from "mongoose";
import bcrypt from 'bcrypt';


const userSchema =  new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required :true ,unique:true},
    password:{type:String,required:true}
},{timestamps:true});


userSchema.pre("save",async function (next){
    if(!this.isModified("password"))  return next();
    this.password = await bcrypt.password(this.password0,10);
    next();
});

export default mongoose.model("User",userSchema);