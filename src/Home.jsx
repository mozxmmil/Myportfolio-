import React from 'react'
import Navbar from './components/Navbar'
import { Landingpage } from './components/Landingpage'
import FeatureSection from './components/FeatureSection'
import LocomotiveScroll from 'locomotive-scroll';


const Home = () => {
  const scroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full duration-300 dark:bg-zinc-900 dark:text-white '>
        <Landingpage/>
        <FeatureSection/>
    </div>
  )
}

export default Home