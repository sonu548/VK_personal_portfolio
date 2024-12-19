import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-5 sm:p-7 md:p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p id="hero-heading" className='text-white font-black text-[32px] sm:text-[40px] md:text-[48px]'>"</p>

    <div className='mt-1'>
      <p id="navbar-heading" className='bg-gradient-to-tr from-[#d5a4f3] to-[#3072d4] text-transparent bg-clip-text transition-all duration-300 cursor-pointer tracking-wide text-[14px] sm:text-[16px] md:text-[18px]'>{testimonial}</p>

      <div className='mt-4 sm:mt-5 md:mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p id="navbar-heading" className='text-white font-medium text-[12px] sm:text-[14px] md:text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p id="navbar-heading" className='mt-1 text-gray-500 text-[10px] sm:text-[11px] md:text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`bg-transparent rounded-[20px] sm:rounded-[25px] md:rounded-[30px]`}>
      <div
        className={`bg-gradient-to-r from-[#41285a] to-gray-900 gap-5 sm:gap-7 md:gap-10 rounded-xl sm:rounded-xl md:rounded-2xl ${styles.padding} min-h-[200px] sm:min-h-[250px] md:min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p id="navbar-heading" className="text-[16px] sm:text-[18px] md:text-[22px] tracking-wide">What others say</p>
          <h2 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 sm:mt-3 md:mt-4 tracking-wide">Testimonials.</h2>
        </motion.div>
      </div>
      <div id="navbar-heading" className={`mt-[2vh] sm:mt-[2.5vh] md:mt-[3vh] bg-[#1b1b1d] pb-8 sm:pb-10 md:pb-14 ${styles.paddingX} rounded-xl sm:rounded-xl md:rounded-2xl flex flex-wrap gap-3 sm:gap-4 md:gap-5`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");