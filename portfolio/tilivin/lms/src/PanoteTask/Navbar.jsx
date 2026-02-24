import React from 'react'

function Navbar() {
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
          <div className='block  sm:hidden'>
            <a href="" className='px-4 text-2xl hover:text-white'>Home</a>
            <a href="" className='px-4 text-2xl hover:text-white'>About</a>
            <a href="" className='px-4 text-2xl hover:text-white'>Skills</a>
            <a href="" className='px-4 text-2xl hover:text-white'>Contact</a>
        </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar