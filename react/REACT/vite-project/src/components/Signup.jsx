
import { Link,useNavigate } from 'react-router-dom'
import React,  {useState} from "react";
import axios from "axios"
function Signup() {
  const navigate = useNavigate();
  const [username,setUsername]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");

  const handleSignup = async ()=>{
    try{
    const res = await axios.post("http://localhost:4001/user/signup",{
    username,
    email,
    password,
    });
    alert(res.data.message);
    navigate("/login");  
  }catch(error){
alert(error.response.data.message)
    }
  }


  return (
    <div className='flex items-center justify-center h-screen bg-orange-400'>
<div className='bg-orange-300 w-80 p-6 rounded-xl shadow-inherit'>
  <h2  className='text-2xl font-bold text-center mb-5'>Signup</h2>
 
 
   <input type="text" placeholder="Username"
  value={username}
  onChange={(e)=> setUsername(e.target.value)}
  
  className='w-full border p-2 rounded mb-4' 
  />
 
 
 
  <input type="Email" placeholder='Email'
  value={email}
  onChange={(e)=> setEmail(e.target.value)}
   className='w-full border p-2 rounded mb-4' 
  />



    <input type="Password" placeholder='Password'
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
     className='w-full border p-2 rounded mb-4' 
    
    
    
    />
    <button className='bg-slate-700 text-white rounded-md py-2 px-2 w-full hover:bg-yellow-700 transition duration-300'
    onClick={handleSignup}
    >Signup</button>


    <p className='text-center mt-3'>
    New Account? {""} 
    <Link className='text-blue-500 hover:underline-offset-2' to="/login">Login</Link> </p>
</div>


    </div>
  

  
  )
}

export default Signup
