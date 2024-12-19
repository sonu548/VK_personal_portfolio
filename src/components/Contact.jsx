import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_2qct8qa template_id
// service_nl6sxze service_id
// WVQc1NtiHYfkerA95 public_key

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_nl6sxze', 
        'template_2qct8qa',
        {
          from_name: form.name,
          to_name: "Vikrant Kushwaha",
          from_email: form.email,
          to_email: "rohansi29990@gmail.com",
          message: form.message,
        },
        'WVQc1NtiHYfkerA95'
      
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    
    <div
      className={`xl:mt-12 flex xl:flex-row mt-[-10vh] flex-col-reverse gap-10  `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#191928] backdrop-blur  p-8 rounded-2xl'
      >
        <p id="navbar-heading" className=" font-bold text-[20px] tracking-wide">Get in touch</p>
        <h3  id="hero-heading" className="font-bold text-6xl  bg-gradient-to-l from-[#c258cb] via-[#d74fc8] to-[#4d71d5] text-transparent bg-clip-text transition-all duration-300 cursor-pointer tracking-wider filter drop-shadow-lg">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='relative mt-12 w-[35vw] flex flex-col gap-8 z-50 overflow-hidden '
        >
          <label className='flex flex-col'>
            <span id="navbar-heading" className='text-white font-medium mb-4'>Your Name</span>
            <input
              id="navbar-heading"
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-[#aca4d4] py-4 px-6 placeholder:text-black text-white rounded-lg outline-none border-none font-medium'
            />
            
          </label>
          <label className='flex flex-col'>
            <span id="navbar-heading" className='text-white font-medium mb-4'>Your email</span>
            <input
              id="navbar-heading"
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-[#aca4d4] py-4 px-6 placeholder:text-black text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span id="navbar-heading" className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              id="navbar-heading"
              rows={7}
              type="text"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-[#aca4d4] py-4 px-6 placeholder:text-black text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            id="hero-heading"
            className='bg-gradient-to-tr from-[#573191e1] to-[#290954] py-3 px-8 rounded-xl outline-none w-fit text-white font-medium shadow-md shadow-primary hover:bg-gradient-to-tr hover:from-[#82c7d1e1] hover:to-[#1b585c] transition-all duration-300'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");