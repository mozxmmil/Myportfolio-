import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  
  const [isopen, setisopen] = useState(true);
  let NavList = [
    {
      name: "about",
    },
    {
      name: "experience",
    },
    {
      name: "project",
    },
    {
      name: "contact",
    },
  ];
  const animationstart = async () => {
    
  };
  return (
    <nav className="px-10 py-5 flex justify-between items-center  lg:flex lg:justify-between lg:items-center">
      <div className="">
        <h1 className="text-2xl font-semibold lg:text-3xl md:text-3xl">logo</h1>
      </div>
      <motion.div
        
        onClick={() => setisopen(!isopen)}
        className="block lg:hidden md:hidden text-2xl z-50"
      >
        {isopen ? <AiOutlineMenu /> : <MdOutlineRestaurantMenu />}
      </motion.div>
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          isopen && "hidden"
        } bg-black/15 lg:hidden md:hidden  z-10`}
      >
        <motion.div
          initial={{ x: 500 }}
          animate={!isopen? { x: 0 } :({ x: 200 })}
          transition={{ ease: [0.87, 0, 0.13, 1], duration: 1 }}
          className="right-0 top-[10%] absolute leading-10 capitalize text-2xl  list-none text-black gap-5 px-5 "
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
        className={`list-none hidden  transition-all bg-green-400    md:flex `}
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
