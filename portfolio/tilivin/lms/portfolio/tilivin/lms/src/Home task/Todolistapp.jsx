import React, { useState } from 'react'

function Todolistapp() {
  const [text,setText]=useState('')
  const[item,setItems]=useState([])
  const AddItems=()=>{
    if(text.trim()==='')return
    setItems([...item,text])
    setText('')
  }
  return (
    
    <div className='w-full h-screen bg-gray-600 justify-center'>
      <input type="text" placeholder='Enter Your Message ' className='w-52 h-8 rounded-md font-semibold px-2 py-2 flex-1 ml-16 mt-11 outline-none md:w-64 md:h-10 md:ml-52 lg:w-80 lg:ml-96'value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
        if(e.key==="Enter"){
          AddItems()
        }
      }}/>
      <button className='ml-3 font-semibold text-xl md:text-2xl ' onClick={AddItems}>Add</button>
      
      <ul className='text-white mt-4'>
        {item.map((value,index)=>(
          <li key={index}>
            {value}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todolistapp