import React from 'react'

function Sidebar() {
  return (
    <>
    <div className='flex'>
        <div className='w-72 h-screen bg-blue-700'>
            <h1 className='text-4xl font-semibold text-white px-4 py-6'>Sidebar</h1>
            <ul className='px-10 space-y-5'>
                <li className='text-3xl text-white hover:bg-blue-900 cursor-pointer'>Home</li>
                <li className='text-3xl text-white hover:bg-blue-900 cursor-pointer'>Home</li>
                <li className='text-3xl text-white hover:bg-blue-900 cursor-pointer'>Home</li>
                <li className='text-3xl text-white hover:bg-blue-900 cursor-pointer'>Home</li>
                <li className='text-3xl text-white hover:bg-blue-900 cursor-pointer'>Home</li>
                <li className='text-3xl text-white hover:bg-blue-900 cursor-pointer'>Home</li>
            </ul>
        </div>
        <nav className='bg-blue-500'></nav>
    </div>
    </>
  )
}

export default Sidebar