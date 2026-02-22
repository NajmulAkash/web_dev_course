import React from 'react'

function AddShortCut() {
  return (
    <>
    <nav className='flex justify-center items-center bg-gray-300 w-full h-screen ' id='#add'>
    <div className='w-1/3 h-72 bg-white rounded-lg'>
        <h1 className='px-10 my-2'>Add ShortCut</h1>
        <h1 className='px-10'>Name</h1>
        <div className='flex justify-evenly py-3'>
        <input className='bg-gray-200 rounded-t-md w-5/6 h-10 hover:bg-gray-300' type="text" placeholder='' />
        </div>
         <h1 className='px-10'>URL</h1>
        <div className='flex justify-evenly py-3'>
        <input className='bg-gray-200 rounded-t-md w-5/6 h-10 hover:bg-gray-300' type="text" placeholder='' />
        </div>
        <div className='flex justify-end px-9 py-4'>
        <button className='w-fit h-fit hover:bg-gray-200 px-4 py-1 rounded-full border-blue-600 text-md font-semibold  border-2'>Cancel</button>
        <button className='w-fit h-fit hover:bg-gray-200 px-4 mx-4 py-1 rounded-full border-blue-600 text-md font-semibold border-2'>Done</button>
        </div>
    </div>
    </nav>
    </>
  )
}

export default AddShortCut