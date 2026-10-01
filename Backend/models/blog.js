//// yaha pr hum user ka schema or data define karenge email,pasword,....
import mongoose from 'mongoose'
const blogSchema= new mongoose.Schema({

    title:String,
    completed:{
        type:Boolean,
        default:false
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}
})

////ab model name store karna padega
export default mongoose.model("Blog",blogSchema);
