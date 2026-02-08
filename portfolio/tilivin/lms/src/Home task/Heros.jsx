import React from 'react'
import Image from '../Image/Lack.webp'
function Heros() {
  return (
    <>
    <div className='h-fit w-full bg-red-600 flex justify-center items-center'>
      <img src={Image} alt="Fatch to Fail" className='w-full h-fit object-cover' />
      <h1 className='absolute inset-0 text-center my-60 font-bold text-3xl text-white md:text-4xl xl:text-6xl lg:text-4xl xl:my-56'>Explore Beautiful Gilgit</h1>
      <h3 className='absolute inset-0 text-xl text-white text-center my-64 py-12 md:text-2xl lg:text-3xl xl:text-4xl xl:my-64'>Decover the Stunking itandseeges of Northen Pakistan</h3>
      <button className='absolute inset-0 flex justify-center items-center mt-[370px] text-white bg-orange-600 w-fit h-fit py-2 px-6 rounded-md m-auto hover:bg-orange-700 outline-none'>
  Explore Now
</button>
    </div>
    </>
  )
}

export default Heros