import React from 'react'

function Chats() {
  return (
    <>
    <div className='bg-zinc-700 h-screen text-center flex'>
        <div className='col-span-1 bg-zinc-600 h-screen w-80'>
            <h1 className='text-2xl text-white py-9 hover:text-yellow-300 cursor-pointer'>Recent Search</h1>
    </div>
    <div className='ml-72'>
        <h1 className='text-4xl my-20 text-center text-white hover:text-yellow-300'>Hello User,Ask me Anything</h1>
        <input type="text" className=' my-96 h-12 w-96 rounded-3xl outline-none text-2xl flex  text-center' placeholder='Ask me anything'/>
        
    </div>
    </div>
    </>
  )
}

export default Chats