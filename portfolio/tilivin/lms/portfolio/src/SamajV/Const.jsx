import React, { useState } from 'react'

function Const() {
 const [count, setCount] = useState(0)
 function inc(){
    setCount(count +1)
 }
 function dec(){
    setCount (count -1)
 }
 function set(){
    setCount (0)
 }
  return (
<div>
    <h1>Increase and Decrease</h1>
<h1>{count}</h1>

 <button onClick={inc} >Increament</button>
 <button onClick={dec}>decreament</button>
 <button onClick={set}>Reset</button>
</div>
  )
}

export default Const