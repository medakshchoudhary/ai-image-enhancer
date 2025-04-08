import React from 'react'

const Footer = () => {
  return (
    <div className="footer flex flex-col items-center gap-2">
        <span className='font-medium'>Powered by</span> 
        <span className='py-[0.4rem] px-[1rem] border-2 border-dashed rounded-xl'>
          <a className='text-blue-300 font-bold' target='_blank'  rel="noopener noreferrer" href="https://www.linkedin.com/in/dakshchoudhary">@Daksh Choudhary </a>
          <a className='text-red-400 font-bold' target='_blank'  rel="noopener noreferrer" href="https://www.linkedin.com/in/dakshchoudhary">@ZeroOne Network</a>
        </span>
    </div>
  )
}

export default Footer