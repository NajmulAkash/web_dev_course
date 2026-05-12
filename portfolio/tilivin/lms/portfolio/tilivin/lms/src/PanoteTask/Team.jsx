import React from 'react'

function Team() {
  return (
     <div className='w-full h-screen bg-white'>
      <h1 className='text-2xl text-center py-4 font-bold'>Wellcome To Hotel</h1>
      <p className='text-2xl font-semibold px-6'>Welcome to our elegant hotel bar, where comfort meets luxury. Enjoy a wide selection of refreshing drinks, signature cocktails, and premium beverages in a relaxing atmosphere. Whether you're unwinding after a long day or meeting friends, our bar offers the perfect setting with great music and exceptional service.</p>
      <div className='w-full h-fit flex justify-around py-4'>
      <h1 className='text-2xl text-yellow-800'>1154</h1>
      <h1 className='text-2xl text-yellow-800'>1160</h1>
      <h1 className='text-2xl text-yellow-800'>1160</h1>
      </div>
   <div className="w-full">
<div className="w-full py-8  px-6">

  <div className="grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  lg:grid-cols-3 
                  gap-6">

    <img 
      src="https://www.bing.com/th/id/OIP.d8HmlDFvn5-2ei-OuCuAwQHaEl?w=209&h=180&c=8&rs=1&qlt=90&o=6&cb=defcachec1&pid=3.1&rm=2"
      alt="Loading"
      className="w-full rounded-3xl transition duration-500 hover:scale-110"
    />

    <img 
      src="https://th.bing.com/th/id/OIF.6r2yJ0nqehsJmFIsMmUGGw?w=250&h=180&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3"
      alt="Loading"
      className="w-full rounded-3xl  transition duration-500 hover:scale-110"
    />

    <img 
      src="https://www.bing.com/th/id/OIP.HLiojKh1-cC85TIXsG7f4QHaEo?w=242&h=180&c=8&rs=1&qlt=90&o=6&cb=defcachec1&pid=3.1&rm=2"
      alt="Loading"
      className="w-full rounded-3xl  transition duration-500 hover:scale-110"
    />

    <img 
      src="https://th.bing.com/th/id/OIP.Scu6hs2VSjEki6_Fcf8TogHaEK?w=320&h=180&c=7&r=0&o=7&cb=defcachec2&pid=1.7&rm=3"
      alt="Loading"
      className="w-full rounded-3xl  transition duration-500 hover:scale-110"
    />

  </div>
<div className="flex justify-center py-7">
  <button className="w-40 h-14 rounded-xl bg-yellow-400 
                     text-2xl font-semibold">
    Learn More
  </button>
</div>
</div>

  



</div>

      <div></div>
    </div>
  )
}

export default Team