import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex flex-col items-center p-3'><img className='rounded-xl w-200 h-70 ' src="/public/nav.jpg" alt="" />
    <div className='-m-55 flex flex-col items-center text-white'>
        <h2 className='text-2xl font-semibold'>You Have Different Questions ?</h2>
        <p className='mt-2 text-gray-200'>Our team will answer all your questions, get in touch if you need more help</p>
    </div>
    </div>
    </>
  )
}

export default Navbar