import User from '../models/user.js'
import jwt from 'jsonwebtoken'
export const signup = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name,email,password);
        
        ///// ye database hai available
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.json({
                 message:"user already exits"
            })
            
        }

        const user= await User.create({
            name,
            email, 
            password
        })
        res.json({
            message:"User signup",
            user
        })

    } catch (error) {
       res.status(500).json({
            errors:error.message
        })

    }

}
export const login = async (req, res) => {
    try{
        //// login me hum email or password ko received kr rahe hai
       const {email,password}=req.body;
       const user=await User.findOne({email})
       if (!user || user.password!==password){
        return res.json({
            message:"Invalid Credentails"
        })
       }
       ///////ab hum token create karenge/////
       const token=jwt.sign({
        userId:user._id
       },
    ////ab secret value chahiye////
    process.env.JWT_SECRET

    )
///// send tokrn in response////
     res.json ({
        message:"User Loging",
        token
     })

    }catch(error){
      res.status(500).json({
        errors:error.message
      })
    }

}

export default User