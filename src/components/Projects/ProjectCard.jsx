import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import {motion} from "framer-motion"
import {fadeIn} from "../../FramerMotion/varinats.js"


const ProjectCard = ({name,year,align,image,link,description}) => {
  return (
    <motion.div
      variants={fadeIn('up',0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0}}
    className={`flex w-full sm:flex-col-reverse items-center gap-8  ${align === "left" ? "md:flex-row" :"md:flex-row-reverse" }`} >
      <div>
        <h2   className={`md:text-3xl sm:text-xl text-orange text-justify sm:text-center ${
    align === "left" ? "md:text-right" : "md:text-left"}`}>{name}</h2>
        <h2 className={`text-xl font-thin text-white font-special sm:text-center ${align=== 'left'? 'md:text-right' :'md:text-left'}`} >{year}</h2>
        <p className={`text-gray-300 text-sm max-w-[350px] text-justify sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`} >
          {description}
        </p>
        <a href={link} className={`text-lg flex gap-2 items-center text-cyan transition-all duration-500 cursor-pointer sm:justify-self-center ${align === 'left' ? "md:justify-self-end" :"md:justify-self-start"}`} >View
          <BsArrowUpRightCircleFill /> </a>
      </div>

      <div className='max-h-[220px] max-w-[400px] w-full  h-[220px] rounded-xl overflow-hidden hover:scale-110 transition-all duration-500 relative border border-white'>
        {/* <div className='w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden' ></div> */}
        <img className='w-full h-full object-cover' src={image} alt={name} />
      </div>
    </motion.div>
  )
}

export default ProjectCard
