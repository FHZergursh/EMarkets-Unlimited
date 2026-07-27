import React from 'react'

const Header = () => {
  return (
    <header className='bg-zinc-400 h-[8vh] flex justify-center items-center gap-[5vw] mb-4'>
      <div className='bg-amber-200 h-[60%] w-[25%]'>Navigation</div>
      <div className='bg-red-200 h-[60%] w-[30%]'>
        <input className='bg-white ' placeholder='Search...'></input>
      </div>
      <div className='bg-blue-200 h-[60%] w-[20%]'>Account details</div>
      

    </header>
  )
}

export default Header