// import React from "react";
// import "./Home.css";

// export default function Projects() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
//   return (
//     <div className="main-container">
//       {/* <h1>Home Sections</h1> */}
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//     </div>
//   );
// }
import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/Home.jpg";
import { useInView } from "react-intersection-observer";
import PreloadImage from "../components/PreloadImage";
// import Carousel from "../components/Carousel";

function Home() {
  const [isImageLoaded, setImageLoaded] = useState(false);

  const { ref: firstRef, inView: firstInView } = useInView({
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: false,
  });

  const title = ["S", "a", "p", "p", "h", "i", "r", "e"];
  const text = "Consaltants";
  const letters = text.split("");

  return (
    <>
      <PreloadImage src={image} onLoad={() => setImageLoaded(true)} />
      <motion.div
        className="w-full h-[70vh] md:h-[150vh] lg:h-[200vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: isImageLoaded ? `url(${image})` : "none",
        }}
        initial={{ backgroundSize: "120%" }}
        animate={{ backgroundSize: firstInView || secondInView ? "100%" : "100%" }}
        transition={{ duration: 3.3 }}
      >
        <div ref={firstRef} className="h-[100vh] flex justify-center items-center flex-col">
          <div className="flex flex-col items-center">
            <motion.div className="flex justify-center text-[14vw] text-[#fff] font-urbanist font-light leading-none">
              {title.map((letter, index) => (
                <motion.span
                  key={index}
                  className={index >= 4 ? "font-semibold" : ""}
                  initial={{
                    translateY: 70,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                  }}
                  animate={{
                    translateY: 0,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
                  }}
                  transition={{ delay: index === 0 ? 0.1 : index * 0.2, duration: 1 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <div className="flex justify-end w-full mt-4">
              <motion.div className="font-urbanist text-[5.58vw] leading-[0.4em] text-[#EAE8E2] font-light pr-2 opacity-70">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      translateX: -70,
                      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                    }}
                    animate={{
                      translateX: 0,
                      clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
                    }}
                    transition={{ delay: index === 0 ? 1.5 : index * 0.1 + 1.5, duration: 0.25 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          ref={secondRef}
          className="h-[100vh] flex items-center justify-center"
          initial={{ backgroundSize: "110%" }}
          animate={{ backgroundSize: firstInView || secondInView ? "110%" : "120%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        ></motion.div>
        {/* <Carousel /> */}
      </motion.div>
    </>
  );
}

export default Home;
