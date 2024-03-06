import React from 'react'
import Navbar from './components/Navbar'
import { Landingpage } from './components/Landingpage'

const Home = () => {
  return (
    <div className='w-full h-full '>
        <Navbar/>
        <Landingpage/>
    </div>
  )
}

export default Home