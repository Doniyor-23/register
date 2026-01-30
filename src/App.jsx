import React from 'react'
import Navbar from '../components/Navbar'
import MoreHelp from '../components/MoreHelp'
import Signup from '../components/Signup'

const App = () => {
  return (
  <>
  <div className='bg-[url("https://c4.wallpaperflare.com/wallpaper/992/897/118/laptop-backgrounds-nature-images-1920x1200-wallpaper-preview.jpg")] bg-cover '>
    <div className='bg-blue-100 ml-[13%] mr-[13%] '>
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