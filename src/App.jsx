import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-between bg-black text-white'>
      <Header />
    
      <Home />

      <Footer />
    </div>
  )
}

export default App