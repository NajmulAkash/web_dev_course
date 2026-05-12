import React, { useState } from 'react'

function Todolist() {
  const deleteItem = (index) => {
  const newList = item.filter((_, i) => i !== index)
  setItems(newList)
}

  const [text, setText]=useState('')
  const [item, setItems]=useState([]);
  const Additems=()=>{
    if(text.trim()==='')return
    setItems([...item,text])
    setText('')
  }
  return (
   <>
     <div className='w-full h-screen bg-gray-700 flex justify-center items-center flex-col'>
    <h1 className='text-4xl text-white font-semibold text-center py-8'>To-Do-List-App</h1>
    <div className='w-1/3 h-1/2  bg-red-600 justify-center items-center rounded-lg text-center'>
        <h1 className='text-white text-3xl py-4 text-center'>To-do-list-app</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
          if(e.key==="Enter"){
            Additems()
          }
        }} className='w-auto h-10 justify-center items-center px-8 rounded-md outline-none' placeholder='Enter Your Text' />
        <button onClick={Additems} className='bg-gray-500  text-white font-semibold text-1xl px-3 py-1 rounded-lg mx-5'>Click me</button>
        <ul className='text-white mt-4'>
          {item.map((val,index)=>(<li key={index}>{val}
                 <button
        onClick={() => deleteItem(index)}
        className="bg-black px-2 rounded"
      >
        Delete
      </button>
          </li>
          
          ))}
        </ul>
    </div>
   </div>
   </>
  )
}

export default Todolist