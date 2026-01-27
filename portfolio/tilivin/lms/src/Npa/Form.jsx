import React, { useState } from 'react'

function Form() {
  const [question,setQuestion]=useState('')
  const askQuestion=()=>{
    console.log(question)
  }
  return (
    <>
    <div className='w-screen h-screen bg-slate-700'>
      <div className='w-{300px} h-full bg-slate-500  mx-96 '>
        <h1 className='text-white text-4xl text-center py-9'>Login Form</h1>
        <input type="text" value={question} onChange={(event)=>setQuestion(event.target.value)} className='mx-44 my-10 w-96 py-2 text-2xl outline-none'placeholder='Enter Your Name' />
        <input type="text" className='mx-44 w-96  my-10 py-2 text-2xl outline-none'placeholder='Enter Your Password'/>
        <h2 className='text-white mx-52 cursor-pointer'>You have already many accound? Sign Up.</h2>
        <h1 className='text-black text-2xl text-center my-4 cursor-pointer' onClick={askQuestion}>Login? </h1>
        <h1 className='text-2xl text-center text-white'>Name: {question}</h1>
      </div>
    </div>
    </>
  )
}

export default Form