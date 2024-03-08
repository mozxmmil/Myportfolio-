import React from 'react'
import Navbar from './components/Navbar'
import { Landingpage } from './components/Landingpage'
import FeatureSection from './components/FeatureSection'

const Home = () => {
  return (
    <div className='w-full h-full duration-1000 dark:bg-zinc-900 dark:text-white '>
        <Landingpage/>
        <FeatureSection/>
    </div>
  )
}

export default Home