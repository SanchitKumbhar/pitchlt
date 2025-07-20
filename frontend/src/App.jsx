import React from 'react';
import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import TrendingPitches from './pages/TrendingPitches';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <TrendingPitches />
    <Footer />
    </>
    
  )
}

export default App
