import React from "react";
import iamge from "../../public/mainPic.jpg";
import { FaGithub } from "react-icons/fa";
import resume from "../../public/resume.pdf";
import Typed from "typed.js";
import { FaAngleDown } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";
import { DarkMode } from "../utils/DarkMode";
import { easeInOut, motion } from "framer-motion";

export const Landingpage = () => {
  const downloadPDF = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const use = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(use.current, {
      strings: [
        "नमस्ते ,I'M",
        "HELLO ,I'M ",
        "ہیلو , I'M",
        "Hola ,I'M",
        "こんにちは ,I'M",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const scrolldown = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Animation state
      transition={{ duration: 1 }}
      
    >
      <div className=" pt-20 pb-10 flex flex-col gap-5  items-center px-5  md:gap-4 lg:gap-20 justify-center w-full lg:flex lg:items-center lg:justify-center lg:px-10 lg:flex-row  md:flex-row">
        <DarkMode />
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1, transition: easeInOut }}
            className="avatar"
          >
            <div className=" rounded-full  ring-primary ring-offset-base-100 ring-offset-2">
              <img src={iamge} />
            </div>
          </motion.div>
        </div>

        <div className="   flex flex-col items-center py-5 px-2   min-h-[100px] md:ml-5 lg:ml-10 ">
          <div className=" h-8 ">
            <span
              ref={use}
              className="name font-semibold text-lg  text-[#000000bb] opacity-55 py-2 dark:text-white duration-300"
            ></span>
          </div>
          <motion.div className=" overflow-hidden ">
            <motion.h1
              initial={{ x: "300px" }}
              animate={{ x: 0 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              in
              className=" text-3xl font-[Dancing Script] py-2"
            >
              Mozammil
            </motion.h1>
          </motion.div>
          <div className=" text-center tracking-tight overflow-y-hidden ">
            <motion.h1
            initial={{y:300,opacity:0}}
              animate={{ text: "pink" ,y:0 ,opacity:1}}
              transition={{duration:1}}
              className="py-2 font-medium text-1xl lg:text-2xl md:text-2xl "
            >
              Full Stack Web developer
            </motion.h1>
          </div>
          <div className="flex gap-1 text-sm pt-3 pb-5 lg:gap-3 ">
            <div className="tracking-tight">
              <button
                onClick={() => downloadPDF("mozammil_fullstack_.pdf", resume)}
                className="btn glass dark:border-2 dark:border-zinc-600"
              >
                Download Cv
              </button>
            </div>
            <div>
              <button onClick={scrolldown} className="btn ">
                Projects
              </button>
            </div>
          </div>
          <div className="flex gap-3 text-3xl">
            <div>
              <a
                href="https://github.com/mozxmmil"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mozammil-undefined-9558002a8/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  flex items-center justify-center lg:flex-col ">
        <div className="px-5 py-5 border-2 rounded-full animate-bounce">
          <FaAngleDown className="animate-bounce" />
        </div>
      </div>
    </motion.div>
  );
};
