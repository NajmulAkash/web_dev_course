import React from 'react'
import { BrowserRouter } from 'react-router-dom'

function FunctionCall() {
    function getdata(Ali){
        return Ali
    }
    const name="FurFar"
    const name1="Najmul"
    function handalclick(){
        alert ("Button was click")
    }
    function doubleclick(){
        alert("Select Text")
    }
  return (
  <>
    <h1>Hello {getdata(name)}</h1>
    <h1>Hello {getdata(name1)}</h1>
    <br />
    <button onClick={handalclick}>Click Me</button>
    <br />
    <h1 onDoubleClick={doubleclick}>Najmul</h1>
    </>
  )
}

export default FunctionCall