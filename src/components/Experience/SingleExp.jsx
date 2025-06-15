import React from 'react'
import {motion} from "framer-motion"
import {fadeIn} from "../../FramerMotion/varinats.js"


const SingleExp = ({exp}) => {
  return (
    <motion.div 
      variants={fadeIn('right',0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0}}
    className='md:h-[300px] md:w-[350px] sm:w-full border-2 border-dashed rounded-2xl mt-12 p-4 ml-10'>
       <h2 className='text-cyan font-bold' >{exp.job}</h2>
       <p className='text-orange' >{exp.company}</p>
       <p className='text-grey'>{exp.Date}</p>
       {/* <ul className='text-white'> */}
        <ul className='list-disc list-inside space-y-1 text-gray-300 text-sm'>
        {exp.responsibility.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SingleExp
