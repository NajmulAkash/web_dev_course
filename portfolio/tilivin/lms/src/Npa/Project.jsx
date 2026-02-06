import React from 'react'
import { FaHtml5 } from "react-icons/fa";
function Project() {
  return (
    <>
    <section className='py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center md-10'>My Project</h2>
        
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='border rounded-lg p-5 shadow hover:shadow-lg transition'>
            <FaHtml5  className='w-9 h-9 justify-center items-center'/>
            <h3 className='text-xl font-semibold mb-2'>Portfolio Website usnig Html & Css</h3>
            <button className='text-xl bg-gray-500 px-7 py-2 rounded-xl text-white'>View Project</button>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Project