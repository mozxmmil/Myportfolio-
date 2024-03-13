import React from 'react'
import Navbar from './components/Navbar'
import { Landingpage } from './components/Landingpage'
import FeatureSection from './components/FeatureSection'
import LocomotiveScroll from 'locomotive-scroll';
import ProjectSection from './components/ProjectSection';
import Contactsection from './components/Contactsection';


const Home = () => {
  const scroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full duration-300 dark:bg-zinc-900 dark:text-white '>
        <Landingpage/>
        <FeatureSection/>
        <ProjectSection/>
        <Contactsection/>

    </div>
  )
}

export default Home