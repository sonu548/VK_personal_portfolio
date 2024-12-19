import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 650,
        }}
        className="bg-tertiary p-3 sm:p-4 md:p-5 rounded-2xl w-full sm:w-[300px] md:w-[360px]"
      >
        <div className="relative w-full h-[160px] sm:h-[200px] md:h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-contain bg-gradient-to-tr from-[#bfadd3] to-[#260658] rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-2 sm:m-2 md:m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-2 sm:mt-3 md:mt-5">
          <h3 id="hero-heading" className="text-white font-medium text-[16px] sm:text-[20px] md:text-[24px]">
            {name}
          </h3>
          <p id="navbar-heading" className="mt-1 sm:mt-2 bg-gradient-to-tr from-[#9dd3dbe1] via-[#d5a4f3] to-[#3072d4] text-transparent bg-clip-text transition-all duration-300 cursor-pointer text-[11px] sm:text-[12px] md:text-[14px]">
            {description}
          </p>
        </div>
        <div id="navbar-heading" className="mt-2 sm:mt-3 md:mt-4 flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
          {tags.map((tag) => (
            <p
              id="navbar-heading"
              key={`${name}-${tag.name}`}
              className={`text-[10px] sm:text-[12px] md:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p id="navbar-heading" className={`${styles.sectionSubText} text-[12px] sm:text-[13px] md:text-base`}>
          My work
        </p>
        <h2 id="hero-heading" className="text-[32px] sm:text-[45px] md:text-[60px] tracking-wide font-bold">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "spring", 0.1, .5)} // Reduced duration and delay for smoother animation
          id="navbar-heading"
          className="mt-2 sm:mt-2.5 md:mt-3 bg-gradient-to-r from-[#86cbd6e1] via-[#ee59f9] to-[#1b6ce5] text-transparent bg-clip-text transition-all duration-200 cursor-pointer text-[12px] sm:text-[15px] md:text-[17px] max-w-3xl leading-[20px] sm:leading-[26px] md:leading-[30px]"
        >
          My portfolio features two standout projects: a modern Employee Management System built with React 18, Tailwind CSS, HR workflows and employee data management with real-time updates and responsive design; and an elegant Interior Decoration website crafted using semantic HTML5, CSS3 flexbox/grid, and vanilla JavaScript that showcases interactive galleries, smooth animations, and mobile-first architecture. These projects demonstrate my expertise.
        </motion.p>
      </div>

      <div className="mt-8  sm:mt-14 md:mt-20 flex flex-wrap gap-3 sm:gap-5  md:gap-7">
        {projects.map((project, index) => (
          <ProjectCard  key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
