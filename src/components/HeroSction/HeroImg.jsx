import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import {motion} from "framer-motion"
import {fadeIn} from "../../FramerMotion/varinats.js"


const HeroImg = () => {
  return (
    <motion.div
    variants={fadeIn('left',0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0}}className='h-full flex items-center justify-center' >
        {/* <motion.div className='absolute -z-10 flex justify-center items-center animate-pulse'>
           {/* <FaRegCircle  className='md:h-[20%] sm:h-[40%] min-h-[360px] w-auto text-cyan z-10 animate-[_20z_linear_infinite]' /> 
        </div> */}
        <img className='max-h-[300px] rounded-lg w-auto  border-[1px] border-cyan' src="/images/vikki.jpg" alt="" />
    </motion.div>
  )
}

export default HeroImg
