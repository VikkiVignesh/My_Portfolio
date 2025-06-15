import React from 'react'
import SingleExp from './SingleExp'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../../FramerMotion/varinats.js'

const Exper = [
  {
    job: 'Software Engineer Intern',
    company: 'Siemens Healthineers',
    Date: 'July 2024 - July 2025',
    responsibility: [
      'Development of RAG based LLM for CT technician',
      'Integration of Front end and BackEnd using Flask',
      'Documentation of Workflow',
      'Integration of power apps with SSMS',
      'Creation of automated workflow for mailing',
      'BI integration with power apps'
    ]
  }
]

const AllExperience = () => {
  const isSingle = Exper.length === 1

  return (
    <div
      className={`flex ${
        isSingle ? 'justify-center' : 'justify-between'
      } items-center flex-wrap gap-8`}
    >
      {Exper.map((exp, index) => (
        <React.Fragment key={index}>
          <SingleExp exp={exp} />
          {Exper.length > 1 && index < Exper.length - 1 && (
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0 }}
            >
              <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default AllExperience
