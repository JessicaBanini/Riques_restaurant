// import { useState } from 'react'
import './App.css'
import Bookatable from './Bookatable'
import Homepage from './Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import Contact from './Contact'
import Classes from './Classes'
import Navbar from './Navbar'



function App() {

  return (
    
    <>
    {/* <Homepage/> */}
    <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/bookatable" element={<Bookatable/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/classes" element={<Classes/>} />
    </Routes>
      
    </>
    
  )
}

export default App
