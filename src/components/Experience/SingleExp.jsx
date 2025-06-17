import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from "../../FramerMotion/varinats.js"

const SingleExp = ({ exp }) => {
  return (
    <motion.div 
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }}
      className='w-full sm:w-[90%] md:w-[350px] border-2 border-dashed rounded-2xl mt-12 p-4 sm:p-6 mx-auto'
    >
      <h2 className='text-cyan font-bold text-lg sm:text-xl'>{exp.job}</h2>
      <p className='text-orange text-sm sm:text-base'>{exp.company}</p>
      <p className='text-grey text-sm mb-2'>{exp.Date}</p>
      
      <ul className='list-disc list-inside space-y-1 text-gray-300 text-sm sm:text-base'>
        {exp.responsibility.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SingleExp
