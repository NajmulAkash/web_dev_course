import React from 'react'
import Image from '../Image/oil.jpg.jpg'
function Heros() {
  return (
    <>
    <div className='h-fit bg-red-500 w-fit flex items-center justify-center'>
        <img src={Image} alt="Hunza" className='flex object-cover' />
        <div className=' absolute inset-0'>
            <h1 className='font-bold text-white text-center'>Explore Beautiful Gilgit</h1>
            <h2 className='text-center text-black text-base'>Discover the  Stunking ilandSeeges of Northen Pakistan</h2>
            <button className='text-center bg-orange-300 rounded-lg text-white py-2 px-2 w-fit h-fit text-xs'>Explore Now</button>
      </div>
    </div>
    </>
  )
}

export default Heros