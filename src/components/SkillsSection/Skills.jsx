import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import AllSkillsSm from './AllSkillsSm'
import {motion} from "framer-motion"
import {fadeIn} from "../../FramerMotion/varinats.js"


const Skills = () => {
  return (
    <div id="skills" >
      <div className=' px-4 mx-auto overflow-hidden relative min-h-[500px]'>
        <motion.div
        variants={fadeIn('down',0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false, amount:0}}>
            <SkillsText/>
        </motion.div>
        
        <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden md:hidden'>
          <AllSkills/>
        </div>
        <div className='sm:block lg:hidden md:block'>
          <AllSkillsSm/>
        </div>
      </div>
    </div>
  )
}

export default Skills
