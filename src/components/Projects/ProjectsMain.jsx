import React from 'react'
import ProjectsText from './ProjectsText'
import ProjectCard from './ProjectCard'
import {motion} from "framer-motion"
import {fadeIn} from "../../FramerMotion/varinats.js"


const projects = [
  {
    name: "AI-Ticket Assignment System",
    year: "May 2025",
    align: "left",
    image: "/images/AI_Ticket.jpg",
    link: "#",
    description: "Automates support ticket assignment using AI-based text classification."
  },
  {
    name: "Dementia care App",
    year: "Jan 2025",
    align: "right",
    image: "/images/Dementia.png",
    link: "https://github.com/VikkiVignesh/SmritiRaksha",
    description: "A multi-mode mobile app to assist dementia patients, caregivers, and doctors."
  },
  {
    name: "Host My Event",
    year: "Mar 2024",
    align: "left",
    image: "/images/project.jpg",
    link: "https://github.com/PintaRam/Kalarava",
    description: "An Android app for organizing, promoting, and managing events efficiently."
  },
  {
    name: "Cricket Score Board",
    year: "Aug 2023",
    align: "right",
    image: "/images/Cricket_score.jpg",
    link: "https://github.com/VikkiVignesh/CricketScoreBoard",
    description: "An interactive scoreboard application for tracking live cricket match scores."
  }
];


const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto p-4'>
      <motion.div
        variants={fadeIn('up',0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0}}
      >
          <ProjectsText/>
      </motion.div>
      
      <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
      
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {
          projects.map((project,index)=>
          (
            <ProjectCard key={index} name={project.name} year={project.year} align={project.align} image={project.image} link={project.link} description={project.description}/>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectsMain
