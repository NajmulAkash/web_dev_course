import React from 'react'
import Image from '../Image/nnnn.png'
function About() {
  return (
   <>
    <h1 className='text-2xl font-semibold text-center py-3 md:text-3xl lg:text-4xl xl:text-5xl'>Explore Our Staffs</h1>
   <div className='w-full h-fit py-10 px-6 gap-y-8'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
         <div className=" rounded-2xl overflow-hidden shadow-lg">
      <img src={Image} className="h-64 w-full object-cover" alt="" />
      <div className="p-4 text-center">
        <h1 className="text-lg font-medium">Full Name</h1>
        <h2 className="text-xl font-semibold">Najmul Akash</h2>
      </div>
    </div>
        <div className=" rounded-2xl overflow-hidden shadow-lg">
      <img src={Image} className="h-64 w-full object-cover" alt="" />
      <div className="p-4 text-center">
        <h1 className="text-lg font-medium">Full Name</h1>
        <h2 className="text-xl font-semibold">Najmul Akash</h2>
      </div>
    </div>
          <div className=" rounded-2xl overflow-hidden shadow-lg">
      <img src={Image} className="h-64 w-full object-cover" alt="" />
      <div className="p-4 text-center">
        <h1 className="text-lg font-medium">Full Name</h1>
        <h2 className="text-xl font-semibold">Najmul Akash</h2>
      </div>
    </div>
       <div className=" rounded-2xl overflow-hidden shadow-lg">
      <img src={Image} className="h-64 w-full object-cover" alt="" />
      <div className="p-4 text-center">
        <h1 className="text-lg font-medium">Full Name</h1>
        <h2 className="text-xl font-semibold">Najmul Akash</h2>
      </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default About