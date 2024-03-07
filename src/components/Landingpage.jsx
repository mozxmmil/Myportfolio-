import React from "react";
import iamge from "../../public/mainPic.jpg";
import { FaGithub } from "react-icons/fa";
import resume from '../../public/resume.pdf'
import Typed from 'typed.js';
import { FaAngleDown } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";

export const Landingpage = () => {
    const downloadPDF = ()=>{
        const pdfUrl = resume;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    
    }
    
    const use = React.useRef(null)
  React.useEffect(() => {
    
    const typed = new Typed(use.current, {
      strings: ["नमस्ते ,I'M",  "HELLO ,I'M ","ہیلو , I'M", "Hola ,I'M","こんにちは ,I'M"],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="">
      <div className=" pt-20 pb-10 flex flex-col gap-5  items-center px-5  md:gap-4 lg:gap-20 justify-center w-full lg:flex lg:items-center lg:justify-center lg:px-10 lg:flex-row  md:flex-row">
        <div className="w-[40vw]  border-2 min-h-[40vw] lg:w-[30vw] lg:min-h-[30vw]  rounded-full ">
          <img
            className="w-full h-full rounded-full overflow-hidden bg-cover bg-center"
            src={iamge}
            alt="kljj"
          />
        </div>
        <div className="  flex flex-col items-center py-5 px-2   min-h-[100px] md:ml-5 lg:ml-10 ">
          <div  className=" h-8 ">
            
            <span ref={use} className="name font-semibold text-lg  text-[#000000bb] opacity-55 py-2">
              
            </span>
          </div>
          <div>
            <h1 className="font-bold text-3xl py-2">MOZAMMIL</h1>
          </div>
          <div className=" text-center tracking-tight  ">
            <h1 className="py-2 font-medium text-1xl lg:text-2xl md:text-2xl">
              Full Stack Web developer
            </h1>
          </div>
          <div className="flex gap-1 text-sm pt-3 pb-5 lg:gap-3 ">
            <div className="tracking-tight" >
              <button
              onClick={()=>downloadPDF('mozammil_fullstack_.pdf',resume)} className="border-2 px-4 py-2 lg:px-3 lg:py-3 md:px-3 md:py-3 rounded-full ">
                Download CV
              </button>
            </div>
            <div>
              <button className="border-2 px-4 py-2 lg:px-3 lg:py-3 md:px-3 md:py-3 rounded-full">
                My Work
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
          <FaAngleDown className="animate-bounce"/>
        </div>
      </div>
    </div>
  );
};
