import React from 'react'
import AboutText from './AboutText'
import AboutImg from './AboutImg'
import { motion } from "framer-motion"
import { fadeIn } from "../../FramerMotion/varinats.js"

const About = () => {
  return (
    <div
      id='about'
      className='flex flex-col-reverse md:flex-row gap-10 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1200px] mx-auto mt-[80px] md:mt-[100px] justify-between items-center'
    >
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='w-full md:w-1/2'
      >
        <AboutText />
      </motion.div>

      <motion.div
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='w-full md:w-1/2 flex justify-center'
      >
        <AboutImg />
      </motion.div>
    </div>
  )
}

export default About
