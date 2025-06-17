import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from "../../FramerMotion/varinats.js"

const HeroText = () => {
  return (
    <div className='w-full md:w-1/2 px-4 sm:px-6 flex flex-col gap-4 h-full justify-center text-center md:text-left'>
      
      <motion.h2 
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='text-cyan text-lg sm:text-xl lg:text-2xl uppercase'
      >
        Java SpringBoot | MERN Stack Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='font-bold font-special text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
      >
        Vignesh P
      </motion.h1>

      <motion.p
        variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='text-white text-base sm:text-lg mt-2 sm:mt-4 leading-relaxed'
      >
        A passionate Software Development Engineer <br />
        Currently learning DevOps
      </motion.p>
    </div>
  )
}

export default HeroText
