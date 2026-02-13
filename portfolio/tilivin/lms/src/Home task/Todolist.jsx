

function Todolist() {
    
  return (
   <>
   <div className='w-full h-screen bg-gray-700 flex justify-center items-center flex-col'>
    <h1 className='text-4xl text-white font-semibold text-center py-8'>To-Do-List-App</h1>
    <div className='w-1/3 h-1/2  bg-red-600 justify-center items-center rounded-lg text-center'>
        <h1 className='text-white text-3xl py-4 text-center'>To-do-list-app</h1>
        <input type="text" className='w-auto h-10 justify-center items-center px-8 rounded-md outline-none' placeholder='Enter Your Text' />
        <button className='bg-gray-500 text-white font-semibold text-1xl px-3 py-1 rounded-lg mx-5'>Click me</button>
    </div>
   </div>
   </>
  )
}

export default Todolist