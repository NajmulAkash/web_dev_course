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
        <img src="https://plus.unsplash.com/premium_photo-1724753996112-f5418fb61aad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFja3xlbnwwfHwwfHx8MA%3D%3D   " alt="" className='w-72 h-72 rounded-xl bg-cover object-cover' />
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