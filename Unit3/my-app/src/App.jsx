import React, { useState } from 'react'
import './App.css'
import Sample from './  component/Sample'
import Navbar from './component/Navbar'
import HomePage from './component/HomePage'
import Contact from './component/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [menu, setMenu] = useState("Sports")
  const [abc, setAbc] = useState("Entertainment")

  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar list={menu} /><Navbar list={abc} /><Sample /></>} /><HomePage />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </>
  )
}

export default App