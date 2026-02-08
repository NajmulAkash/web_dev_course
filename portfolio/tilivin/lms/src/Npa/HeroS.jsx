import React from 'react'
import Image from '../Image/najmul.png'

function HeroS() {
  return (
    <section className="min-h-screen  flex items-center bg-indigo-400" id='Home'>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm Najmul Akash
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6">
              Frontend Developer | React | Tailwind CSS
            </p>

            <button className="bg-white text-teal-600 py-3 px-8 rounded-full font-semibold hover:scale-105 transition duration-300">
              View My Work
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={Image}
              alt="Portfolio"
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full border-4 border-white shadow-xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroS
