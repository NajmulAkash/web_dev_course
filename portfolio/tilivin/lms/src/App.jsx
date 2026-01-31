import React from 'react'
import Portfolio from './Home task/Portfolio'
import Portfolios from './Npa/Portfolios'
function App() {
  return (
    <>
    <Portfolio/>
    <div className='w-full h-screen bg-gray-400 flex'>
      <div className='mx-36 my-40  h-96 bg-yellow-400 w-fit'>
        <h1 className='text-5xl font-bold'>Hi,I,am Najmul Akash</h1>
        <p className='text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus error ipsum tempore totam aliquam iusto ut voluptatum labore, nemo, aut iste eaque ratione facere sed rem sit. Atque, excepturi modi.</p>
      </div>
      <div className='w-96 h-96 bg-red-500 my-28  rounded-full'></div>
    </div>
    <Portfolios/>
    </>
  )
}

export default App