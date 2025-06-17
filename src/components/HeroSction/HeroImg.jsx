import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from "../../FramerMotion/varinats.js"

const HeroImg = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }}
      className='w-full sm:w-auto flex items-center justify-center'
    >
      <img
        className='w-[80%] max-w-[300px] sm:max-w-[250px] rounded-lg border border-cyan object-cover aspect-square'
        src="/images/vikki.jpg"
        alt="Profile"
      />
    </motion.div>
  )
}

export default HeroImg
