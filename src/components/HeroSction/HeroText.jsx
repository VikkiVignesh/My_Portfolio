import React from 'react'
import {motion} from "framer-motion"
import {fadeIn} from "../../FramerMotion/varinats.js"

const HeroText = () => {
  return (
    <div className='ml-10 flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
      
      <motion.h2 
      variants={fadeIn('down',0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0}}
      className='lg:text-2xl sm:text-xl uppercase text-cyan'>Java SpringBoot | MERN Stack Developer</motion.h2>
      <motion.h1
      variants={fadeIn('right',0.4)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0}}
      className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special'>Vignesh P</motion.h1>
      <motion.p
      variants={fadeIn('up',0.6)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0}}
      className='text-white text-lg mt-4 '>
        A passinote Software Developer Engineer 
        <br/> Currenlty  learning Devops
      </motion.p>
    </div>
  )
}

export default HeroText
