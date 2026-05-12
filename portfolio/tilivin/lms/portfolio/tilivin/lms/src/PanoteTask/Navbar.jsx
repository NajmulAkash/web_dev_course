import React, { useState } from 'react'

function Navbar() {
    const [Item,setItem]=useState(false)
  return (
  <>
  <nav className='bg-pink-600'>
    <div className='h-16 flex items-center px-5 justify-between'>
        <div class="text-4xl">Logo</div>
        <div className='hidden  sm:block'>
            <a href="" className='px-4 text-2xl hover:text-white'>Home</a>
            <a href="" className='px-4 text-2xl hover:text-white'>About</a>
            <a href="" className='px-4 text-2xl hover:text-white'>Skills</a>
            <a href="" className='px-4 text-2xl hover:text-white'>Contact</a>
        </div>
        <button onClick={()=>setItem(!Item)}>Open</button>
       
    </div>
       <div className={`${Item ? "block" :"hidden"}  sm:hidden bg-red-500 space-y-2`}>
            <a href="" className='px-4 text-2xl hover:text-white block '>Home</a>
            <a href="" className='px-4 text-2xl hover:text-white block '>About</a>
            <a href="" className='px-4 text-2xl hover:text-white block '>Skills</a>
            <a href="" className='px-4 text-2xl hover:text-white block '>Contact</a>
        </div>
  </nav>
  </>
  )
}

export default Navbar