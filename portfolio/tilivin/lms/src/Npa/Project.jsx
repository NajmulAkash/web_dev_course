import React from 'react'
import { FaHtml5 } from "react-icons/fa";
function Project() {
  return (
    <>
    <section className='py-16 bg-gray-800'>
        <h2 className='text-3xl font-bold text-center md-10 text-white'>My Project</h2>

      <div className='grid grid-cols-3 justify-between gap-2 '>
       
          <div className='border rounded-lg p-5 shadow hover:shadow-lg transition'>
            <FaHtml5  className='w-9 h-9 justify-center items-center text-white'/>
            <h3 className='text-xl font-semibold mb-2 text-white '>Portfolio Website usnig Html & Css</h3>
            <button className='text-sm bg-gray-500 px-2 py-2 rounded-sm text-white'>Click Me</button>
          </div>
          
          <div className='border rounded-lg p-5 shadow hover:shadow-lg transition'>
            <FaHtml5  className='w-9 h-9 justify-center items-center text-white'/>
            <h3 className='text-xl font-semibold mb-2 text-white'>Portfolio Website usnig Html & Css</h3>
           <button className='text-sm bg-gray-500 px-2 py-2 rounded-sm text-white'>Click Me</button>
          </div>
        
      </div>
       
    </section>
    
    </>
  )
}

export default Project