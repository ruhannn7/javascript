import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Sample from './component/Sample';

function App() {
  const [menu, setMenu] = useState('Sports')
  const [abc, setAbc] = useState('Entertainment')
  return (
    <>
    <Navbar list={menu} />
    <Navbar list={abc} />
    <Sample />
    </>
    )
  }

export default App;