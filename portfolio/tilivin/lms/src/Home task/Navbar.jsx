
import React, { useState } from 'react'
function Navbar() {
    const [isopen, setIsOpen] =useState(false)
  return (
    <>
    <nav className='bg-purple-500'>
        <div className='h-16 flex items-center justify-between'>
            <div className='text-3xl font-bold text-white px-10'>Logo</div>
            <div className='hidden sm:block'>
                <a href="" className='text-2xl px-4 text-gray-100 hover:text-gray-900'>Home</a>
                <a href="" className='text-2xl px-4 text-gray-100 hover:text-gray-900'>About</a>
                <a href="" className='text-2xl px-4 text-gray-100 hover:text-gray-900'>Service</a>
                <a href="" className='text-2xl px-4 text-gray-100 hover:text-gray-900'>Contact</a>
            </div>
        </div>
         <div className={`${isopen ? "block" : "hidden"} sm:hidden bg-gray-100 space-y-2 pb-4`}>
                <a href="" className='text-2xl px-4 text-gray-600 block'>Home</a>
                <a href="" className='text-2xl px-4 text-gray-600 block'>About</a>
                <a href="" className='text-2xl px-4 text-gray-600 block '>Service</a>
                <a href="" className='text-2xl px-4 text-gray-600 block '>Contact</a>
                  <button onCanPlay={()=>setIsOpen(!isopen)}>Open</button>
            </div>
          
    </nav>
    </>
  )
}

export default Navbar