import React from "react";
import { SiNextdotjs } from "react-icons/si";

const FeatureSection = () => {
  const cardInfo = [
    {
      languge: "Html",
      icon: "https://www.instagram.com/p/CvKb9ZqRf5h/",
    },
    {
      languge: "Css",
      icon: "https://www.instagram.com/p/CvKb9ZqRf5h/",
    },
    {
      languge: "Java Script",
      icon: "https://www.instagram.com/p/CvKb9ZqRf5h/",
    },
    {
      languge: "Tailwind Css",
      icon: "https://icons8.com/icon/4PiNHtUJVbLs/tailwind-css",
    },
    {
      languge: "React",
      icon: "https://www.instagram.com/p/CvKb9ZqRf5h/",
    },
    {
      languge: "Node Js",
      icon: "https://icons8.com/icon/54087/nodejs",
    },
    {
      languge: "Express Js",
      icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg",
    },
    {
      languge: "Next Js",
      icon: "<SiNextdotjs />",
    },
  ];
  return (
    <div className="w-full h-screen bg-green-300 ">
      <div>
        <h1></h1>
      </div>
      <div className="w-full px-10 py-10 flex gap-10 flex-wrap items-center justify-center bg-yellow-300">
        <div className="card w-[15rem] h-[15rem] bg-red-400 rounded-md relative">
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Html</h1>
        </div>
        <div className="card w-[15rem] h-[15rem] bg-red-400 rounded-md"></div>
        <div className="card w-[15rem] h-[15rem] bg-red-400 rounded-md"></div>
        <div className="card w-[15rem] h-[15rem] bg-red-400 rounded-md"></div>
        <div className="card w-[15rem] h-[15rem] bg-red-400 rounded-md"></div>
      </div>
    </div>
  );
};

export default FeatureSection;
