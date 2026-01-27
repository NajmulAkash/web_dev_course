import React, { useState } from 'react'
import { URL } from './constant'

function Chats() {
 
  const [question,setQuestion]=useState('')
  const [result,SetResult]=useState(undefined)
   const load={
    "Contents":[{
      "parts":[{"text":question}]
    }]
  }
  const askquestion= async()=>{
  let respon=await fetch(URL,{
    method:"POST",
    body:JSON.stringify(load)
  })
  respon = await respon.json()
  SetResult(respon.condidates[0].content.parts[0].text)
  }
  return (
    <>
    <div className='bg-yellow-700 h-screen text-center flex'>
        <div className='col-span-1 bg-zinc-600 h-screen w-80'>
            <h1 className='text-2xl text-white py-9 hover:text-yellow-300 cursor-pointer'>Recent Search</h1>
    </div>
            <div className='w-full h-full bg-zinc-700'>
              <h1 className='text-4xl text-white my-24'>Najmul Akash Ha ha hah ha ha</h1>
              <div className='text-white overflow-hidden'>
              {result}
              </div>
              <input type="text" name="" value={question} onChange={(even)=>setQuestion(even.target.value)} className='w-96 rounded-3xl text-4xl text-center my-52' id="" placeholder='Ask me thing'/>
              <button className='text-2xl text-white mx-10' onClick={askquestion}>Ask</button>
            </div>
    </div>
    </>
  )
}

export default Chats