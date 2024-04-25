import React, { useEffect, useState } from "react";

import { Landingpage } from "./components/Landingpage";
import FeatureSection from "./components/FeatureSection";
import LocomotiveScroll from "locomotive-scroll";
import ProjectSection from "./components/ProjectSection";
import Contactsection from "./components/Contactsection";
import PreloadingPage from "./components/PreloadingPage";
import { motion } from "framer-motion";
const Home = () => {
  const scroll = new LocomotiveScroll();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          transition={{ duration: 1 }}
        >
          <PreloadingPage />
        </motion.div>
      ) : (
        <div className="w-full h-full duration-300 dark:bg-zinc-900 dark:text-white ">
          <Landingpage />
          <FeatureSection />
          <ProjectSection />
          <Contactsection />
        </div>
      )}
    </>
  );
};

export default Home;
