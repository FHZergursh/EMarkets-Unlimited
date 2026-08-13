import React, { useState } from 'react'

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)


  return (
    <header className='bg-zinc-400 h-[8vh] flex justify-center items-center gap-[5vw] mb-4'>
      <div className=' h-[60%] w-[25%] flex gap-5 text-white text-3xl'>
        <a href='/'>Home</a>
        <div>Categories</div>
      </div>
      <div className=' h-[60%] w-[30%] flex justify-center items-center'>
        <input className='bg-white w-full ' placeholder='Search...'></input>
      </div>
      <div className=' h-[60%] w-[20%]'>

        {loggedIn ? (
          <div> logged in</div>

        ) : (
        <div className='flex gap-10 items-center justify-center text-2xl'> 
          <a href='/login' className='text-blue-200'>Log in</a>
          <a href='/signup' className='text-sky-200'>signup</a>
        </div>
        )}

      </div>
      

    </header>
  )
}

export default Header