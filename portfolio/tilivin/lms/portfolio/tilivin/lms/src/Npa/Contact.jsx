import React from 'react'

function Contact() {
  return (
    <>
      <section className='py-16 bg-gray-700' id='Contact'>
      <div className='max-w-4xl mx-auto px-4'>
        <h2 className='text-3xl font-bold-text-center mb-10 text-white'>
          Contact Me
        </h2>
        <form className='bg-white p-8 rounded-lg shadow -md'>
          <div className='mb-4'>
            <label className='block mb-1 font-medium'>Name</label>
            <input type="text" placeholder='Enter Your Name' className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black' />
          </div>
              <div className='mb-4'>
            <label className='block mb-1 font-medium'>Name</label>
            <input type="text" placeholder='Enter Your Name' className='w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black' />
          </div>
          <div className='mb-4'>
            <label className='block mb-1 font-medium'>Message</label>
            <textarea rows="4"placeholder='Your Message' className='w-full border px-4 py-2 rounded'></textarea>
          </div>
          <button className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800'>Send Message</button>
        </form>
      </div>
    </section>
       
    </>
  )
}

export default Contact