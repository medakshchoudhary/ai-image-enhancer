import React from 'react'

const Header = () => {
  return (
<div className="header flex flex-col items-center justify-center gap-2 text-center">
        <h1 className='text-5xl font-black tracking-tighter'>AI Image <span className='text-blue-300'>Enhancer</span></h1>
        <p className='text-xl  uppercase'>Upload the Image, let <span className='text-green-400'>AI</span> do the rest for you!!😎</p>
    </div>
  )
}

export default Header