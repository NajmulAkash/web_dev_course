import React from 'react'
import { TbBrandFiverr } from "react-icons/tb";
import { SiFreelancer } from "react-icons/si";
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineWechat } from "react-icons/ai";
import { BiLogoTailwindCss } from "react-icons/bi";
import '../../src/App.css'

function Google() {
  return (
    <>
    <div className='w-full h-fit'>
        <h1 className='text-4xl font-semibold text-center py-16 md:text-5xl lg:text-6xl xl:text-8xl'><span className='text-blue-600'>G</span><span className='text-red-600'>o</span><span className='text-yellow-500'>o</span><span className='text-blue-600'>g</span><span className='text-green-600'>l</span><span className='text-red-600'>e</span></h1>
        <div className='flex justify-center'>
            <input type="text" placeholder='Search Google or type a URL' className='w-2/3 h-16 rounded-full text-xl text-black px-14 shadow-2xl outline-none' id='inputfiled'/>
        </div>
        <div className=' justify-center items-center flex space-x-10 py-9'>
            {/* <div className='w-2/3 h-fit bg-red-50 '>ali</div> */}
             <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-4xl px-2 py-2 text-blue-500'><AiOutlineWechat /></div>ChatGPT</div> <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-3xl px-2 py-2 text-blue-600
             '><FaLinkedin /></div>Linkedin</div> <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-3xl px-2 py-2 text-blue-600'><BiLogoTailwindCss /></div>Tailwind Css</div> <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-3xl px-2 py-2 text-green-600'><TbBrandFiverr /></div>Fiverr</div> <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-3xl px-3 py-3 text-blue-600'><SiFreelancer /></div>Freelancer</div>
            <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-4xl'></div>Add Shortcut</div>
        </div><ul>
          <li><Link to="/AddShortCut">Lingf</Link></li>
          <li><Link to="/About">Lingf</Link></li></ul>
    </div>
    </>
  )
}

export default Google