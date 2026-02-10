import React from 'react'
import Image from '../Image/Lack.webp'
function Heros() {
  return (
    <>
    <div className='h-fit w-full bg-red-600 flex justify-center items-center'>
      <img src={Image} alt="Fatch to Fail" className='w-full h-fit object-cover' />
      <h1 className='absolute inset-0 text-center text-white my-10 text-2xl md:text-4xl md:my-14 lg:text-6xl lg:my-28 xl:my-40'>Explore Beautiful Gilgit</h1>
      <h3 className='absolute inset-0 text-lg text-white text-center my-20 md:text-3xl md:my-28 lg:text-4xl lg:my-48 xl:my-60'>Decover the Stunking itandseeges of Northen Pakistan</h3>
      <button className='absolute inset-0 flex justify-center items-center mt-[135px] text-white bg-orange-600 w-fit h-fit py-2 px-6 rounded-md m-auto hover:bg-orange-700 outline-none md:mt-[170px] lg:my-[270px] xl:my-[310px]'>
  Explore Now
</button>
    </div>
    </>
  )
}

export default Heros