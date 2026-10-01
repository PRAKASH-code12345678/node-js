import jwt from 'jsonwebtoken';

const authMiddleware=(req,res,next)=>{
    try{
const token= req.headers.authorization;
if(!token){  

return res.json({
    message:"login first"
   })
}
const decoded=jwt.verify(token,
    process.env.JWT_SECRET
)
req.user= decoded
next()
    }catch(error){
  res.json({errors:"Invalid Token"})
   
    }
}

export default authMiddleware








































// import jwt from "jsonwebtoken";

// const authMiddleware = (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;
//         console.log("AUTH HEADER:", authHeader);

//         if (!authHeader) {
//             return res.status(401).json({
//                 message: "login first"
//             });
//         }

//         const token = authHeader.split(" ")[1];
//         console.log("TOKEN:", token);

//         const decoded = jwt.verify(
//             token,
//             process.env.JWT_SECRET
//         );

//         req.user = decoded;

//         next();

//     } catch (error) {
//         console.log("JWT ERROR:", error.message);

//         return res.status(401).json({
//             errors: error.message
//         });
//     }
// };

// export default authMiddleware;