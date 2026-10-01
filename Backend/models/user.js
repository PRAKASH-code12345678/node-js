//// yaha pr hum user ka schema or data define karenge email,pasword,....
import mongoose from 'mongoose'
import user from '../controllers/user.js';
const userSchema= new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})


////ab model name store karna padega
export default mongoose.model("User",userSchema);

