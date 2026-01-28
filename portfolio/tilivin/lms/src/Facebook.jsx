import React from 'react'

function Facebook() {
  return (
    <div className='bg-gray-300 h-screen w-screen  flex'>
      <div className='w-96 mx-60 py-40'>
        <h1 className='text-6xl font-bold text-blue-600 '>Facebook</h1>
        <p className='text-xl py-4 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam .</p>
      </div>
      <div className=' w-80 bg-slate-100 flex flex-col my-40 h-80 py-2 mr-20 px-7 rounded-lg'>
        <input  type="text" name="" className='rounded-md outline-none my3 py-2 px-5 my-2 hover:outline-red-300' placeholder='Enter your Name' />
        <input  type="text" name="" className='rounded-md outline-none my-3 py-2 px-5 hover:outline-red-300' placeholder='Password' />
        <button className='font-bold bg-blue-700 py-2 text-sm rounded-md my-4 text-white hover:bg-blue-800'>Log in</button>
        <span className='text-center hover:underline cursor-pointer my-2'>Reset Password?</span>
        <button className='bg-green-600 w-fit py-2 px-3 rounded-md my-3 mx-10 text-white'>Create New Accound</button>
        <span className='text-sm text-center py-8'>Domain Name:Najmul Akash.</span>
      </div>
    </div>
  )
}

export default Facebook