import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden" style={{backgroundImage: "url('/src/assets/herobg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 id="hero-heading" className="text-white text-[40px] sm:text-[65px] font-medium">
            Hi, I'm{" "}
            <span
              className="bg-gradient-to-tr from-[#89dfece1] via-[#c47cf1] to-[#1e67d3] text-transparent bg-clip-text text-[45px] sm:text-[70px] transition-all duration-300 cursor-pointer font-bold tracking-wider"
              id="hero-heading"
            >
              Vikrant.
            </span>
          </h1>
          <p
            id="hero-heading-short"
            className="mt-2 text-lg sm:text-2xl capitalize bg-gradient-to-tr from-[#e8b0e0e1] to-[#acd4ff] text-transparent bg-clip-text transition-all duration-300 cursor-pointer font-medium"
          >
            I develop React Applications, user{" "}
            <br className="sm:block hidden" />
            interfaces and web applications...
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="relative w-[35px] h-[64px] rounded-3xl border-4  border-gray-500 flex justify-center items-start top-20 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full  bg-red-500 mb-3"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
