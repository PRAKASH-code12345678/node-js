import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../context-api/AuthContext'

function Logout() {
    ///ab function call karenge 
    const {logout}=useAuth()
    const navigate =useNavigate()

    const handlelogout=()=>{
        logout()
        navigate("/")

    }
  return (
   <button onClick={handlelogout} className=' bg-orange-700 text-white hover:text-red-500 rounded-md px-4 py-4 font-medium transition '>
    Logout
   </button>
      
    
  )
}

export default Logout
