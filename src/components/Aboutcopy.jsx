import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Spline from '@splinetool/react-spline';



const Aboutcopy = () => {
  return (
    <>

  {/* <Spline scene="https://prod.spline.design/cLaUct9bnQWsrDZA/scene.splinecode" /> */}
   <div>
          
          <motion.div variants={textVariant()}>
          <p className={`${styles.heroSubText} mt-14 text-cyan-500	text-[10px] flex-wrap justify-center text-center leading-[22px] ">`}>
          WINNING THE "FUTURE STAR" AWARD<br className="sm:block hidden" />
          </p>
          
          <p className={`${styles.heroHeadText} text-white mt-0 text-slate-300	flex text-[30] flex-wrap justify-center text-center ">`}>
               <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white leading-[50Px]" > MANZEL TECHNOLOGIES </span>
                </p>
                <p className="  text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-white leading-[30Px] justify-center text-center" > 
                click on Akin to see the interactive</p>
               <div class="mt-7 flex flex-wrap justify-center  gap-10">
      {/* <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJXKMll6484rFIUEKmYM10GXjUxCGmEyJdKQc3WyupxT5jUQ/viewform?usp=pp_url"
          id="button-secondry"
          className=" animate-slideleftT4 pg-cyan-300 px-[30x] py-[7px] cursor-pointer hover:scale-105 active:scale-90 hover  duration-150 select-none rounded-[px]  hover: border-indigo-cyan-300 hover:bg-shadow-[#67e8f9]/50  font-bold py- px-10 border-b-2 border-cyan-300 hover:border-orange-500 px-[20px] py-[10px] rounded-[9px]  hover: text-cyan-300 shadow-lg shadow-[#67e8f9]/50 justify-center "
          
        >
          Join Wishlist
          </a> */}
          </div>
          <Spline scene="https://prod.spline.design/cLaUct9bnQWsrDZA/scene.splinecode" />
          <h1 className={`${styles.heroHeadText} text-white mt-3 text-slate-300	flex text-[20x] flex-wrap justify-center text-center ">`}>
            <p>Interactive- </p>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white "> simulation platform</span>
           
          </h1>
          </motion.div>
          <motion.div variants={textVariant()}>
            <p className={`${styles.heroSubText} mt-3 text-white-200 mt-10 text-slate-300	flex text-[18px] flex-wrap justify-center text-center leading-[20x] ">`}>
            We build new immersive, and rewarding architectural simulation platform with
            </p>
            <p className={`${styles.heroSubText} mt-3 flex-wrap justify-center text-[22px] text-center leading-[10Px] ">`}>
               <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white leading-[10Px]" > Enjoyable experience. </span>
               </p>
            
          </motion.div>  
          
               {/* <div class="mt-7 flex flex-wrap justify-center  gap-10">
      <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJXKMll6484rFIUEKmYM10GXjUxCGmEyJdKQc3WyupxT5jUQ/viewform?usp=pp_url"
          id="button-secondry"
          className=" animate-slideleftT4 pg-cyan-300 px-[30x] py-[7px] cursor-pointer hover:scale-105 active:scale-90 hover  duration-150 select-none rounded-[px]  hover: border-indigo-cyan-300 hover:bg-shadow-[#67e8f9]/50  font-bold py- px-10 border-b-2 border-cyan-300 hover:border-orange-500 px-[20px] py-[10px] rounded-[9px]  hover: text-cyan-300 shadow-lg shadow-[#67e8f9]/50 justify-center "
          
        >
          Join Wishlist
          </a> */}
          {/* <a
          href="#Section_4"
          id="button-secondry"
          className=" animate-slideleftT4 px-[40x] py-[10px] cursor-pointer hover:scale-105 active:scale-90 hover  duration-150 select-none rounded-[px]  hover: border-indigo-cyan-300 hover:bg-shadow-[#67e8f9]/50  font-bold py-2 px-10 border-b-2 border-cyan-300 hover:border-orange-500 px-[20px] py-[10px] rounded-[9px]  hover: text-cyan-300 shadow-lg shadow-[#67e8f9]/50 justify-center "
          
        >
          Start Playing
          </a> */}
      </div>    
            
            {/* <Spline scene="https://prod.spline.design/cLaUct9bnQWsrDZA/scene.splinecode" /> */}
              
              
           {/* <a
            href="#Section_4"
            id="button-secondry"
            className=" animate-slideleftT4 text-cyan-300 px-[30x] py-[10px] cursor-pointer hover:scale-105 active:scale-90 hover bg-tertiary duration-150 select-none rounded-[px]  hover: border-indigo-cyan-30 hover:bg-shadow-[#67e8f9]/50  font-bold py-2 px-10 border-b-2 border-cyan-300 hover:border-cyan-800 px-[20px] py-[10px] rounded-[9px]  hover: text-cyan-800 shadow-lg shadow-[#67e8f9]/50  "
          
            >
             COMMING SOON
          </a>
         */}
    
  
          
        
      {/* <div class="mt-0  ">
      <motion.div variants={textVariant()}>
      
        
      </motion.div>
      </div> 
     
      <div class="mt-10 text-slate-300	flex text-[18px] flex-wrap leading-[300px] ">
      <h2 className={styles.sectionHeadText}>About.</h2>
        <p className={styles.sectionSubText}>Who We Are?</p>
       <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-0 text-secondary text-[ 18px-center max-w-4xl leading-[30px]"
       >
        Manzel is the first VR educational game for Architects that utilizes AI & Virtual reality to teach students using challenges to maximize the quality of the learning process in a short time through metaverse.

       </motion.p>
      
      </div> */}
      {/* <div className="mt-20 flex flex-wrap gap-10 leading-[40px] ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          
        ))}
        
      </div>
      <div class="mt-10 flex flex-wrap ">
      <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Our Vision & Goals.</h2>
        <p className={styles.sectionSubText}>what we want to Acheive?</p>
        
       
      </motion.div>
      </div>  */}
     
      {/* <div class="mt-10 text-slate-300	flex text-[18px] flex-wrap justify-center text-center leading-[50px] ">
       <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-0 text-secondary text-[ 18px-center max-w-4xl leading-[30px]"
       >
        We aim to fill the gaps between theoretical learning and market needs by transforming theoretical knowledge into a poignant, interactive, easy-to-learn experiment to build a solid foundation that helps students and engineers gain more experience before engaging with a real job in short time through metaverse.

       </motion.p>
      
      </div> */}
          
    
    </>
    
  );
  
};

export default SectionWrapper(Aboutcopy);
