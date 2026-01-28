import React from 'react'
import Navbar from '../components/Navbar'
import MoreHelp from '../components/MoreHelp'
import Signup from '../components/Signup'

const App = () => {
  return (
  <>
  <div><Navbar/></div>
  <div className='grid grid-cols-2 gap-10 mt-70 px-3 ml-10'>
    <MoreHelp/>
    <Signup/>
  </div>
  </>
  )
}

export default App