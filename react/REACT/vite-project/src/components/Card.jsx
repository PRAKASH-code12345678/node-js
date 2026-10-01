import React from 'react'

function Card({title,body}) {
  return (
                 <div className='bg-white rounded-xl shadow-2xl hover:shadow-inherit transition duration-500 p-6 border-amber-300 '>
                    <h2>{title}</h2>
                    <p className='text-white-300 '>{body}</p>
                    <button className='bg-purple-500 hover:bg-pink-400 px-2 py-2 rounded-md'>Read More .... </button>

                 </div>
  )
}

export default Card
