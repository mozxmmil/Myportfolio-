import React from "react";
import iamge from "../../public/mainPic.jpg";
import { FaGithub } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

export const Landingpage = () => {
  return (
    <div className="w-full  lg:flex lg:items-center lg:justify-center   ">
      <div className=" pt-20 pb-10 flex flex-col gap-5  items-center px-5  md:gap-4 lg:gap-1 justify-center w-full lg:flex lg:items-center lg:justify-center lg:px-10 lg:flex-row  md:flex-row">
        <div className="w-[40vw]  border-2 min-h-[40vw] lg:w-[30vw] lg:min-h-[30vw]  rounded-full ">
          <img
            className="w-full h-full rounded-full overflow-hidden bg-cover bg-center"
            src={iamge}
            alt="kljj"
          />
        </div>
        <div className="  flex flex-col items-center py-5 px-10   min-h-[100px] md:ml-5 lg:ml-10 ">
          <div>
            <h1 className="font-semibold text-[#000000bb] opacity-55 py-2">
              HELLO,I'M
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-3xl py-2">MOZAMMIL</h1>
          </div>
          <div>
            <h1 className="py-2 font-medium text-2xl">
              Full Stack Web developer
            </h1>
          </div>
          <div className="flex gap-3 pt-3 pb-5">
            <div>
              <button className="border-2 px-3 py-3 rounded-full">
                Download Cv
              </button>
            </div>
            <div>
              <button className="border-2 px-8 py-3 rounded-full ">
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
    </div>
  );
};
