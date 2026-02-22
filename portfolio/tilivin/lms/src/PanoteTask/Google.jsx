import React from 'react'
import Link {Link} from "react-router-dom"
function Google() {
  return (
    <>
    <div className='w-full h-fit'>
        <h1 className='text-4xl font-semibold text-center py-16 md:text-5xl lg:text-6xl xl:text-8xl'><span className='text-blue-600'>G</span><span className='text-red-600'>o</span><span className='text-yellow-500'>o</span><span className='text-blue-600'>g</span><span className='text-green-600'>l</span><span className='text-red-600'>e</span></h1>
        <div className='flex justify-center'>
            <input type="text" placeholder='Search Google or type a URL' className='w-2/3 h-16 rounded-full text-xl text-black px-14 shadow-xl outline-none' />
        </div>
        <div className=' justify-center items-center flex space-x-10 py-9'>
            {/* <div className='w-2/3 h-fit bg-red-50 '>ali</div> */}
             <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-4xl'>+</div>ChatGPT</div> <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-4xl'>+</div>Linkedin</div> <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-4xl'>+</div>Tailwind Css</div> <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-4xl'>+</div>Fiverr</div> <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-4xl'>+</div>Freelancer</div>
            <div className='w-32 h-fit  hover:bg-gray-200 cursor-pointer text-center rounded-md'> <div className='w-12 h-12 rounded-full mx-10 bg-gray-300 my-8 text-4xl'><Link to="#add">+</Link></div>Add Shortcut</div>
        </div>
    </div>
    </>
  )
}

export default Google