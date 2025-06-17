import React from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../../FramerMotion/varinats.js'

const ProjectCard = ({ name, year, align, image, link, description }) => {
  const isLeftAligned = align === 'left'

  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full items-center gap-8 sm:flex-col-reverse ${
        isLeftAligned ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-2 md:w-1/2 sm:w-full">
        <h2
          className={`md:text-3xl sm:text-xl text-orange font-semibold ${
            isLeftAligned ? 'md:text-right' : 'md:text-left'
          } sm:text-center`}
        >
          {name}
        </h2>
        <h3
          className={`text-xl font-thin text-white font-special ${
            isLeftAligned ? 'md:text-right' : 'md:text-left'
          } sm:text-center`}
        >
          {year}
        </h3>
        <p
          className={`text-gray-300 text-sm max-w-[350px] ${
            isLeftAligned ? 'md:text-right' : 'md:text-left'
          } sm:text-center`}
        >
          {description}
        </p>
        <div
          className={`mt-2 flex gap-2 items-center text-cyan text-lg transition-all duration-500 cursor-pointer ${
            isLeftAligned ? 'md:justify-end' : 'md:justify-start'
          } sm:justify-center`}
        >
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange">
            View <BsArrowUpRightCircleFill />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 sm:w-full max-w-[400px] h-[220px] rounded-xl overflow-hidden relative border border-white group">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={name}
        />
        <div className="absolute inset-0 bg-cyan opacity-50 group-hover:opacity-0 transition-opacity duration-500 md:block sm:hidden" />
      </div>
    </motion.div>
  )
}

export default ProjectCard
