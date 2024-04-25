import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "../style.css";
import { EffectCards } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import image from "../../public/project.png";
import { Link } from "react-router-dom";

export default function App() {
  const card = useAnimation();
  const hoverStart = () => {
    card.start({ y: 0, opacity: 1 });
  };
  const onHoverEnd = () => {
    card.start({ y: "100px" });
  };

  const swipercard = [
    {
      link: "http://twitter-zt59-git-main-mozammils-projects.vercel.app",
      titile: "Twitter",
      Image:
        "https://nealschaffer.com/wp-content/uploads/mariia-shalabaieva-88XcHKPLe3E-unsplash.jpeg",
    },
    {
      link: "",
      titile: "JioSaavn",
      Image:
        "https://www.reliancedigital.in/wp-content/uploads/2018/12/JioSaavn-Homepage-1.jpg",
    },
    { link: "", titile: "Awarded Website", Image: image },
    {
      link: "",
      titile: "Instagram clone",
      Image:
        "https://images.unsplash.com/photo-1595039838779-f3780873afdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <div className="w-full h-full pb-10">
        <h1 className="text-4xl font-bold text-center md:text-left mt-10 px-28">
          Project
        </h1>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper h-[320px] w-[240px] md:h-[360px] md:w-[280px] mt-5 "
        >
          {swipercard.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                onHoverStart={hoverStart}
                onHoverEnd={onHoverEnd}
                className="w-full h-full relative "
              >
                <a href={item?.link ? item.link : "/"}>
                  <div className=" h-full w-full absolute top-1/2 left-1/2 -translate-y-1/2 bg-[#0000005f] -translate-x-1/2 z-[99] opacity-0 hover:opacity-100 duration-700"></div>
                  <img
                    className="w-full h-full  object-cover "
                    src={item.Image}
                    alt=""
                  />
                  <div className="absolute  bottom-0 h-10  w-full  left-1/2 -translate-y-1/2 -translate-x-1/2 overflow-hidden z-[9999] ">
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={card}
                      transition={{
                        ease: [0.45, 0, 0.55, 1],
                        duration: index * 0.3,
                      }}
                      className=" text-white  text-center  "
                    >
                      {item.titile}
                    </motion.h1>
                  </div>
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
