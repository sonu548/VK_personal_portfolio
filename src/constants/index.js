import { h, p } from "maath/dist/misc-19a3ec46.esm";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "JavaScript Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "None",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2024 - Present",
      points: [
        "Developed and maintained large-scale React applications using modern hooks, context API and custom hooks",
        "Implemented state management solutions with Redux and Redux Toolkit, improving application predictability",
        "Created reusable component libraries and design systems following atomic design principles",
        "Optimized React performance through code splitting, lazy loading, and memoization techniques",
      ],
    },
    {
      title: "JavaScript Developer",
      company_name: "None",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2023 - 2024",
      points: [
        "Built high-performance JavaScript applications using modern ES6+ features and best practices",
        "Developed custom reusable utility functions and modules that improved code reusability by 40%",
        "Implemented complex data structures and algorithms to optimize application performance",
        "Created automated test suites using Jest achieving 90%+ code coverage",
      ],
    },
    {
      title: "Tailwind Developer",
      company_name: "None",
      icon: shopify,
      iconBg: "#383E56",
      date: "2024",
      points: [
        "Developed modern responsive UIs using Tailwind CSS utility-first approach and custom design systems",
        "Created reusable Tailwind components and optimized builds reducing CSS bundle size by 60%",
        "Implemented complex animations and transitions using Tailwind's built-in animation classes",
        "Built custom Tailwind plugins and configurations to extend functionality for project needs",
      ],
    },
    {
      title: "Web Developer",
      company_name: "None",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2022 - 2023",
      points: [
        "Led development of full-stack web applications using React, Node.js, and modern cloud technologies",
        "Architected scalable solutions handling 100K+ daily users with 99.9% uptime through AWS infrastructure",
        "Optimized application performance achieving 40% faster load times through code splitting and caching",
        "Mentored junior developers and conducted technical interviews to build high-performing engineering team",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Nice Design and Responsive Website with 3D Animation and Smooth Scrolling 😍😍",
      name: "Rohan Kumar",
      designation: "Web Developer",
      company: "None",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "i like the design and the animation of the website wow ❤️❤️",
      name: "Lilit Rajput",
      designation: "Software Developer",
      company: "None",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "best portfolio website i have ever seen 😍😍 ",
      name: "Shrikant",
      designation: "Employee",
      company: "None",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "A modern and interactive portfolio website built with React and Three.js, featuring 3D animations, smooth scrolling, and responsive design. Showcases my projects, skills and experience as a web developer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient", 
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Employee Management System",
      description:
        "A comprehensive employee management system built with React 18 and Tailwind CSS, featuring HR workflows, employee data management, attendance tracking, leave management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Interior Design Website",
      description:
        "A modern and elegant interior design website built with semantic HTML5 and CSS3. Features responsive layouts using flexbox/grid, interactive image galleries, smooth scroll animations, and mobile-first design principles.",
      tags: [
        {
          name: "html5",
          color: "blue-text-gradient",
        },
        {
          name: "css3",
          color: "green-text-gradient",
        },
        {
          name: "responsive",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };