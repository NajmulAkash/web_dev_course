import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
function ResponsiveNavbar() {
    const [isopen,setisOpen] = useState(false)
  return (
  <>
  <nav className='bg-purple-500'>
    <div className='h-16 flex items-center justify-between'>
        <div className='text-3xl font-bold px-5'>LMS</div>
        <div className='hidden sm:block'>
            <a href="" className='text-gray-100 text-lg px-5'>Dashboard</a>
            <a href="" className='text-gray-100 text-lg px-5'>Courses</a>
            <a href="" className='text-gray-100 text-lg px-5'>Calendar</a>
            <a href="" className='text-gray-100 text-lg px-5'>Messages</a>
        </div>
    <button onClick={()=>setisOpen(!isopen)} className='px-4 text-white text-3xl'><FiAlignJustify /></button>
        
    </div>
    
    <div className={`${isopen ? "bloack":"hidden"} sm:hidden bg-gray-100 py-3 space-y-2`}>
            <a href="" className='text-gray-600 text-lg px-5 block'>Dashboard</a>
            <a href="" className='text-gray-600 text-lg px-5 block'>Courses</a>
            <a href="" className='text-gray-600 text-lg px-5 block'>Calendar</a>
            <a href="" className='text-gray-600 text-lg px-5 block'>Messages</a>
        </div>
  </nav>
  </>
  )
}

export default ResponsiveNavbar