import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20  ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-10x2 mx-auto   ">
        <Link
          to="/"
          className="flex items-center gap-0"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-10 object-contain backdrop-blur-md " />
          <p className=" text-[18px] font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400">
            MANZEL -منزل &nbsp;
          </p>
        </Link>
        
        {/* <div className= "w-[350px] h-auto  flex flex-row items-center justify-center mr-[15px]  bg-[#0300145e] border border-[#00ECFE] px-[20px] py-[10px] rounded-full "> */}
        <ul className="w-[380px] h-full hidden 850:flex  flex flex-row items-center justify-center mr-[20px]  bg-[#0300145e] border border-[#00ECFE] border-x-0 border-t-0 px-[20px] py-[10px] rounded-[9px] list-none hidden sm:flex flex-row gap-5 shadow-lg shadow-[#67e8f9]/50 ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-cyan-300 text-[16px] font-medium cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
       
        
        </ul>
          <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJXKMll6484rFIUEKmYM10GXjUxCGmEyJdKQc3WyupxT5jUQ/viewform?usp=pp_url"
          id="button-secondry"
          className=" animate-slideleftT4 px-[30x] py-[10px] cursor-pointer hover:scale-105 active:scale-90 hover  duration-150 select-none rounded-[px]  hover: border-indigo-cyan-300 hover:bg-shadow-[#67e8f9]/50  font-bold py-2 px-10 border-b-2 border-cyan-300 hover:border-orange-500 px-[20px] py-[10px] rounded-[9px]  hover: text-cyan-300 shadow-lg shadow-[#67e8f9]/50  "
        >
          Wishlist
          </a>
        
    

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 cyan-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>    
          </div>  
        </div>
      </div> 
    </nav>
  );
};

export default Navbar;
