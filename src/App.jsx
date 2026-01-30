import React from 'react'
import Navbar from '../components/Navbar'
import MoreHelp from '../components/MoreHelp'
import Signup from '../components/Signup'

const App = () => {
  return (
  <>
  <div className='bg-[url("https://c4.wallpaperflare.com/wallpaper/438/540/844/ocean-4k-for-desktop-background-download-wallpaper-preview.jpg")] bg-cover '>
    <div className='bg-green-50/80 ml-[13%] mr-[13%] '>
    <div><Navbar/></div>
  <div className='grid grid-cols-2 gap-10 mt-[29.6%] px-3 ml-[8%] '>
    <MoreHelp/>
    <Signup/>
  </div>
  </div>
  </div>
  </>
  )
}


export default App