import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-screen flex items-center z-50 h-30 py-5 fixed bg-transparent top-0  ${
        scrolled ? "bg-primary dark:bg-transparent" : "bg-transparent"
      } transition-all duration-300 ease-in-out backdrop-blur-sm`}
    >
      <div className='w-full h-30  flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex  h-30  items-center gap-3'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={'./coding.png'} alt='logo'  className='w-15 h-15 ' />
          <p id="navbar-heading" className='text-white text-[18px]  font-bold cursor-pointer flex dark:text-gray-200'> 
            Vikrant &nbsp;   
            <span id="navbar-heading" className='sm:block hidden'> | JavaScript Developer</span>
          </p>
        </Link>

        <div className='flex items-center  gap-5'>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title 
                    ? "text-white dark:text-gray-200" 
                    : "text-gray-600 dark:text-gray-400"
                } hover:text-white dark:hover:text-gray-200 text-[18px] font-medium cursor-pointer transition-colors duration-300`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} id="navbar-heading">{nav.title}</a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 
            hover:bg-gray-300 dark:hover:bg-slate-600 transition-all duration-300 ease-in-out 
            shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 "
            aria-label="Toggle theme"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>

          <div className='sm:hidden flex flex-1 justify-end items-center transition-all duration-300 ease-in-out'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer transition-all duration-300 ease-in-out'
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl 
              bg-gradient-to-r from-gray-900 to-gray-800 dark:from-slate-800 dark:to-slate-900
              shadow-xl backdrop-blur-lg backdrop-filter
              transform transition-all duration-300 ease-in-out
              ${toggle ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-300 ease-in-out`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] 
                    ${active === nav.title 
                      ? "text-white dark:text-gray-200" 
                      : "text-secondary dark:text-gray-400"
                    } hover:text-white dark:hover:text-gray-200 transition-colors duration-300`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;