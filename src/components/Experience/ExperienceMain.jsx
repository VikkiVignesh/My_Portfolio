import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from "./ExperienceTop"
import AllExperience from './AllExperience'
import { motion } from "framer-motion"
import { fadeIn } from "../../FramerMotion/varinats.js"

const ExperienceMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] mx-auto px-4 sm:px-6 mt-[100px]'>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>

      <motion.div
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>

      {/* Horizontal line - visible only on larger screens */}
      <div className='w-full h-[1px] mt-4 bg-lightBrown hidden lg:block'></div>

      <AllExperience />
    </div>
  )
}

export default ExperienceMain
