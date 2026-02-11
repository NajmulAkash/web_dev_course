import React from 'react'
import Image from '../Image/Ka.webp'
function TourisAbout() {
  return (
   <>
   <div className='w-full h-fit'>
    <h1 className='text-2xl font-semibold text-center py-3 md:text-3xl lg:text-5xl'>Popular Destinations</h1>
    <div className='flex justify-around py-4 lg:py-8'>
    <div className='w-1/3 h-20 md:h-32 bg-gray-600 rounded-lg lg:h-44'>
    <img src="src\Image\lack.webp" alt="" className='w-fit h-full  object-cover md:w-full rounded-lg' />
    </div>
    <div className='w-1/3 h-20 md:h-32 bg-gray-600 rounded-lg lg:h-44'>
    <img src="src\Image\lack.webp" alt="" className='w-fit h-full  object-cover md:w-full rounded-lg' />
    </div>
    </div>
    <div className='flex justify-around py-4'>
    <div className='w-1/3 h-20 md:h-32 bg-gray-600 rounded-lg lg:h-44'>
    <img src="src\Image\Kachura.webp" alt="" className='w-fit h-full  object-cover md:w-full rounded-lg' />
    </div>
    <div className='w-1/3 h-20 md:h-32 bg-gray-600 rounded-lg lg:h-44'>
    <img src="src\Image\kurnia-ramadhan-V0oowoWaFf4-unsplash.jpg" alt="" className='w-fit h-full  object-cover md:w-full rounded-lg' />
    </div>
    </div>
   </div>
   </>
  )
}

export default TourisAbout