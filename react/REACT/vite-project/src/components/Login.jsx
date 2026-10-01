import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../../../context-api/AuthContext'
function Login() {
const [email,setEmail]= useState("");
const [password,setPassword]= useState("");
const navigate= useNavigate();
const {login}=useAuth()




const handleLogin=async ()=>{
  try{
const res= await axios.post("http://localhost:4001/user/login",{
  email,
  password

});

login(res.data.token)
alert(res.data.message);
navigate("/")
  }catch(error){
   alert(error.response?.data?.message || "Login Failed")
  }
}

  return (
    <div className='flex items-center justify-center h-screen bg-blue-300'>
<div className='bg-yellow-50 w-80 p-6 rounded-xl shadow-inherit'>
  <h2  className='text-2xl font-bold text-center mb-5'>Login</h2>

  <input type="Email" placeholder='Email' className='w-full border p-2 rounded mb-4'
  value={email}
  onChange={(e)=> setEmail(e.target.value)}
   />


    <input type="Password" placeholder='Password' className='w-full border p-2 rounded mb-4' 
    value={password}
    // onClick={password}
    onChange={(e)=> setPassword(e.target.value)}
    />


    <button className='bg-slate-700 text-white rounded-md py-2 px-2 w-full hover:bg-yellow-700 transition duration-300'
    onClick={handleLogin}
    >Login</button>
    <p className='text-center mt-3'>New Account {""} <Link className='text-blue-500 hover:underline-offset-2' to="/signup">Signup</Link></p>
</div>


    </div>
  

  
  )
}

export default Login
