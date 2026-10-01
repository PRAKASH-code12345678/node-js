import React from 'react'

function Hero() {
  return (
  <section className='py-16 bg-orange-300'>
    <div className='text-center'>
        <h1 className='text-4xl mx-auto '>Welcome <span className=' text-orange-600'>to BlogVerse</span>

        </h1>
        <br />
        <p>Expolor blogs on technology, progamming, lifestyle, bussines, and many topics. Learn something every day.</p>
       <br />
        <button className='bg-slate-600 hover:bg-slate-900 text-white px-4 py-4 rounded-md transition'>Explore Blogs</button>
    </div>
  </section>
  )
}

export default Hero
