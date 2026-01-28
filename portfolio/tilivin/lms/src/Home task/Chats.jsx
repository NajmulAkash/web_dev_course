import React from 'react'

function Chats() {
  return (
    <>
    <div className='bg-zinc-500 w-screen h-screen flex'>
        <div className='w-80 h-screen bg-zinc-600 flex'></div>
        <div className=''>
            <h1 className='text-4xl text-center py-32 text-white'>Hello, what do you want to any Question</h1>
            <input type="text" className='w-96 py-3 rounded-xl outline-none  px-4 text-1xl mx-72 my-44' placeholder='Ask me Question' />
            <span></span>
        </div>
    </div>
    </>
  )
}

export default Chats