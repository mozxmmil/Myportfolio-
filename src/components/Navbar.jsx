import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [isopen, setisopen] = useState(true);
  let NavList = [
    {
      name: "project",
    },
    {
      name: "contact",
    },
  ];

  return (
    <nav className="px-10 duration-300 dark:bg-black dark:text-white bg-[#ffffff08] z-[9999] backdrop-blur-sm h py-5 flex fixed w-full justify-between items-center  lg:flex lg:justify-between lg:items-center lg:px-20 lg:py-15">
      <div className="">
        <h1 className="text-2xl font-semibold  lg:text-3xl md:text-3xl font-[Anta]">
          <a className="font-[BILLY ARGEL font Regular]" href="/">
            Moxl.dev
          </a>
        </h1>
      </div>
      <motion.div
        onClick={() => setisopen(!isopen)}
        className="block lg:hidden md:hidden text-2xl z-50"
      >
        {isopen ? <AiOutlineMenu /> : <MdOutlineRestaurantMenu />}
      </motion.div>
      <div
        className={`absolute top-0 left-0 w-full h-screen ${
          isopen && "hidden"
        } bg-[#0000005c] backdrop-blur-sm lg:hidden md:hidden  z-20`}
      >
        <motion.div
          initial={{ x: 500 }}
          animate={!isopen ? { x: 0 } : { x: 200 }}
          transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.5 }}
          className="right-0 top-[10%] capitalize text-white absolute leading-10  text-2xl  list-none z-50 gap-5 px-5 "
        >
          {NavList.map((item, index) => (
            <li>
              <a key={index} href={`/${item.name}`}>
                {item.name}
              </a>
            </li>
          ))}
        </motion.div>
      </div>
      <div
        className={`list-none hidden capitalize transition-all  lg:gap-10 lg:text-3xl md:text-2xl md:font-medium md:gap-5 lg:font-medium  md:flex `}
      >
        {NavList.map((item, index) => (
          <li>
            <a key={index} href={`/${item.name}`}>
              {item.name}
            </a>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
