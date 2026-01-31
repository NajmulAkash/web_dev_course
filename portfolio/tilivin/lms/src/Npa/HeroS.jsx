import React from 'react'
import Image from '../Image/nnn.png'

function HeroS() {
  return (
    <>
    <section className='min-h-screen bg-gradient-to-r from-teal-400-blue-500'>
        <div className='max-w- max-auto px-6 flex items-center min-h-screen bg-red-400'>
            <div className='flex flex-col md:flex-row items-center gap-6 text-center md:text-left'>
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
                        Hi, I'am Najmul Akash
                    </h1>
                    <p className='text-lg md:text-xl text-white/90 mb-6'>
                     Frontend Developer | React | Tailwind CSS
                    </p>
                    <button className='bg-white text-teal-600 py-3 px-6 rounded-full font-semibold hover: scale-105 transition'>View My Work</button>
                </div>
                <img src={Image} alt="Portfolio" className='w-48 md:w-72 rounded-full border-4 border-white' />
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroS