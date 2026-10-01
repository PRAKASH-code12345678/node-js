import React from 'react'
import {Link} from 'react-router-dom'
import hero from "../assets/hero.png"
import { useAuth } from '../../../../context-api/AuthContext'
import Logout from './Logout'

function Navbar() {
  const {token}=useAuth()
  return (
<nav className='sticky top-0 z-50 shadow-md bg-white'>
  <div className='max-w-7xl mx-auto px-8 h-16 flex items-center justify-between'>
    <img src={hero} alt="hero" className='h-10 w-90' />
    <div className='flex items-center gap-8'>
      <Link to="/" className='text-gray-1000 hover:text-blue-400 font-medium transition '>Home</Link>
        <Link to="/Course" className='text-gray-1000 hover:text-blue-400 font-medium transition '>Course</Link>
          {/* <Link to="/" className=' bg-orange-700 text-white hover:text-blue-400 rounded-md px-4 py-4 font-medium transition '>Login</Link> */}

          {
            token?(<Logout/>):(
                    <Link to="/" className=' bg-orange-700 text-white hover:text-blue-400 rounded-md px-4 py-4 font-medium transition '>Login</Link> 
            )
          }
    </div>
  </div>
</nav>
  )
}

export default Navbar
