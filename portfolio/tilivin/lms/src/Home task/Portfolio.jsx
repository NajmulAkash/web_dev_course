import React from 'react'

function Portfolio() {
  return (
    <div className='w-full h-20 bg-gray-400 flex'>
        <h1 className='text-4xl font-bold px-11 py-4 sm:px-3 sm:text-3xl md:text-4xl md:px-10 '>Portfolio</h1>
        <a href="#" className='mx-16 xl:py-14 sm:mx-2 md:mx-8 '></a>
        <a href="#" className='mx-10 text-2xl py-5 hover:underline sm:mx-2 sm:text-1/2  md:text-3xl   md:mx-7'>About</a>
        <a href="#" className='mx-10 text-2xl py-5 hover:underline sm:mx-2 sm:text-1/2  md:text-3xl   md:mx-7'>Home</a>
        <a href="#" className='mx-10 text-2xl py-5 hover:underline sm:mx-2 sm:text-1/2  md:text-3xl   md:mx-7'>Developer</a>
        <a href="#" className='mx-10 text-2xl py-5 hover:underline sm:mx-2 sm:text-1/2  md:text-3xl   md:mx-7'>Blogs</a>
        <a href="#" className='mx-10 text-2xl py-5 hover:underline sm:mx-2 sm:text-1/2  md:text-3xl   md:mx-7'>Contact</a>
    </div>
  )
}

export default Portfolio