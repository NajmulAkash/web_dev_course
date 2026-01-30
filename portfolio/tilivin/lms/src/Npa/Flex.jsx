import React from 'react'
import Image from '../Image/nnn.jpg'

function Flex() {
  return (
    <div className='w-96 h-96 bg-red-700 my-24 mx-24 rounded-full flex'>
        <img src={Image} alt="loadig" className='w-96 h-96 rounded-full bg-cover' />
        <h1 className='font-bold text-2xl'>Hi, I am Najmul AKash</h1>
    </div>
  )
}

export default Flex