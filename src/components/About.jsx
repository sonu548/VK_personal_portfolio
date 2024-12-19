import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-[300px] mx-auto my-3 sm:my-4 sm:w-[450px] sm:mx-8'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      id='hero-heading'
      className='w-full sm:w-[445px] bg-gradient-to-tr from-[#bfadd3] to-[#260658] p-[1px] rounded-[20px] z-[-1] shadow-card backdrop-blur'
    >
      <div
        options={{
          max: 35,
          scale: 0.5,
          speed: 350,
        }}
        className='bg-gradient-to-tr from-[#3e2f57] to-[#0f062c] backdrop-blur-[20px] rounded-[20px] py-3 px-4 sm:py-5 sm:px-12 h-[200px] sm:min-h-[280px] flex flex-col sm:flex-row justify-evenly items-center gap-3'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-10 h-10 sm:w-16 sm:h-16 object-contain'
        />

        <h3 id='hero-heading' className='text-gray-400 text-[14px] sm:text-[20px] font-th text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p id="navbar-heading" className={`${styles.sectionSubText} ml-1 text-gray-400 z-10`}>Introduction</p>
        <h2 id='hero-heading' className="font-medium text-3xl sm:text-5xl text-gray-200 tracking-wide">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 sm:mt-4 text-[14px] sm:text-[17px] max-w-3xl leading-[22px] sm:leading-[30px] bg-gradient-to-tr from-[#9dd3dbe1] via-[#d5a4f3] to-[#3072d4] text-transparent bg-clip-text transition-all duration-300 cursor-pointer'
      >
        I'm a passionate JavaScript developer with expertise in modern web technologies
        and frameworks like React, Node.js, and Three.js. I specialize in building
        interactive and responsive web applications using JavaScript and its ecosystem.
        I'm dedicated to writing clean, maintainable code and creating seamless user
        experiences. Let's collaborate to transform your vision into reality!
      </motion.p>

      <div className='mt-12 sm:mt-20 font-light flex flex-wrap justify-center gap-4 sm:gap-10'>
        {services.map((service, index) => (
          <ServiceCard id='hero-heading' key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");