import React from 'react'
import Google from './PanoteTask/Google'
import AddShortCut from './PanoteTask/AddShortCut'
import { Route, Routes } from 'react-router-dom'
import About from './PanoteTask/About'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Google />} />
        <Route path='/AddShortCut' element={<AddShortCut />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </>
  )
}

export default App