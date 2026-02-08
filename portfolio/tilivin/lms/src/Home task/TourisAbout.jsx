import React from 'react'
import Image from '../Image/Ka.webp'
function TourisAbout() {
  return (
   <>
   <div className='w-full h-screen bg-red-500 '>
    <h1 className='text-4xl text-center  font-bold py-6 space-y-7'>Popular Destinations</h1>
    <div className='w-full h-4/5 flex space-x-20 px-14 justify-center items-center'>
    <div className='w-72 h-72 bg-green-500 rounded-xl'>
        <img src="C:\Users\lenovo\Pictures\ss\Gemini_Generated_Image_g22afwg22afwg22a.png" alt="" className='w-72 h-72 rounded-xl bg-cover object-cover' />
    </div>
    <div className='w-72 h-72 bg-green-500 rounded-xl'>
        <img src={Image} alt="" className='w-72 h-72 rounded-xl bg-cover object-cover' />
    </div>
    <div className='w-72 h-72 bg-green-500 rounded-xl'>
        <img src={Image} alt="" className='w-72 h-72 rounded-xl bg-cover object-cover' />
    </div>
    <div className='w-72 h-72 bg-green-500 rounded-xl'>
        <img src={Image} alt="" className='w-72 h-72 rounded-xl bg-cover object-cover' />
    </div>
    </div>
   </div>
   </>
  )
}

export default TourisAbout