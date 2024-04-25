import React from "react";
import { motion } from "framer-motion";

const PreloadingPage = () => {
  return (
    <div className="w-full h-screen bg-black  z-[9999999] relative flex items-center justify-center   text-white">
      <motion.div
        initial={{ opacity: 0 }} // Initial state
        animate={{ opacity: 1, width: "100%", height: "100%" }} // Animation state
        transition={{ duration: 1 }}
        className="w-1/2 h-1/2 top-1/2 bg-zinc-700 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
      >
        <div className="w-full h-full flex items-center justify-center rounded-lg">
          <motion.h1 initial={{scale:1}} animate={{scale:2}} className=" text-8xl loading loading-infinity loading-lg"></motion.h1>
        </div>
      </motion.div>
    </div>
  );
};

export default PreloadingPage;
