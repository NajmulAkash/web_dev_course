import React from 'react'
import Image from '../Image/najmul.png'

function HeroS() {
  return (
    <>
    
    <section className='min-h-screen bg-gradient-to-r from-teal-400-blue-500'>
        <div className='max-w- max-auto px-6 flex items-center min-h-screen bg-red-400'>
            <div className='flex flex-col md:flex-row items-center gap-6 text-center md:text-left'>
                <div className='mx-32 py-20'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
                        Hi, I'am Najmul Akash
                    </h1>
                    <p className='text-lg md:text-xl text-white/90 mb-6'>
                     Frontend Developer | React | Tailwind CSS
                    </p>
                    <button className='bg-white text-teal-600 py-3 px-6 rounded-full font-semibold hover: scale-105 transition'>View My Work</button>
                </div>
                <div className='w-80 h-80 rounded-full border-4 border-black bg-green-500 overflow-hidden'>
                    <img src={Image} alt="Portfolio" className='rounded-full w-80 h-80 md:w-24 md:h-24'/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroS