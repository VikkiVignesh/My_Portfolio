import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import AllSkillsSm from './AllSkillsSm'
import { motion } from 'framer-motion'
import { fadeIn } from '../../FramerMotion/varinats.js'

const Skills = () => {
  return (
    <div id="skills" className="w-full py-16 bg-black">
      <div className="px-4 mx-auto max-w-[1200px] relative flex flex-col items-center">
        {/* Heading */}
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <SkillsText />
        </motion.div>

        {/* Skills Section */}
        <div className="w-full mt-12">
          {/* Desktop View */}
          <div className="hidden lg:flex justify-center">
            <AllSkills />
          </div>

          {/* Mobile & Tablet View */}
          <div className="block lg:hidden">
            <AllSkillsSm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
