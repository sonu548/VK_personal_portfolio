import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div id='hero-heading' className='flex justify-center font-light items-center w-full h-full'>
          <img
            id='hero-heading'
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 id='hero-heading' className='text-white font-light text-[24px]'>{experience.title}</h3>
        <p
          id='hero-heading'
          className='text-gray-500 font-light text-[16px]'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            id="navbar-heading"
            className='bg-gradient-to-tr from-[#9dd3dbe1] via-[#d5a4f3] to-[#3072d4] text-transparent bg-clip-text transition-all duration-300 cursor-pointer font-light text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p id="navbar-heading" className="text-center font-bold text-[24px] tracking-wide">
          What I have done so far
        </p>

        <h2 id='hero-heading' className="text-center font-bold text-[60px] tracking-wide bg-gradient-to-r from-[#86cbd6e1] via-[#ee59f9] to-[#1b6ce5] text-transparent bg-clip-text transition-all duration-300 cursor-pointer">
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");