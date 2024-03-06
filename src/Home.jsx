import React from 'react'
import Navbar from './components/Navbar'
import { Landingpage } from './components/Landingpage'
import FeatureSection from './components/FeatureSection'

const Home = () => {
  return (
    <div className='w-full h-full '>
        <Navbar/>
        <Landingpage/>
        <FeatureSection/>
    </div>
  )
}

export default Home