import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";

const MoreHelp = () => {
  return (
    <>
    <div className='flex flex-col items-start gap-6 p-5'>
        <div>
            <h1 className='text-4xl font-bold text-black '>You Need More Help?</h1>
            <p className='font-[430] mt-2 text-gray-800 flex flex-col'>One of our workspace experts will reach out to you based <span>on the category of your question</span></p>
        </div>
        <div>
            <h2 className='font-[480] text-gray-800'>Follow us</h2>
            <div className='flex gap-3 mt-3 text-gray-900'><FaFacebook /><FaGithub /></div>
        </div>
    </div>

    </>
  )
}

export default MoreHelp