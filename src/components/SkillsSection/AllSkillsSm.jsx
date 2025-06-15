import React from 'react'
import EachSkill from './EachSkill'
import { FaJava } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";
import { FaLinux } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { RiAiGenerate2 } from "react-icons/ri";
import {motion} from "framer-motion"
import {fadeIn} from "../../FramerMotion/varinats.js"


const skills = [
  {
    skill: "Java",
    icon: FaJava,
    color: "#007396" // Java Blue
  },
  {
    skill: "Spring Boot",
    icon: SiSpring,
    color: "#6DB33F" // Spring Green
  },
  {
    skill: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E" // JS Yellow
  },
  {
    skill: "Express JS",
    icon: SiExpress,
    color: "#000000" // Black
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    color: "#47A248" // Mongo Green
  },
  {
    skill:"SQL",
    icon:SiMysql,
    color:"8A2BE2"
  },
  {
    skill: "Node JS",
    icon: FaNodeJs,
    color: "#339933" // Node Green
  },
  {
    skill: "React JS",
    icon: FaReact,
    color: "#61DAFB" // React Blue
  },
  {
    skill: "Git",
    icon: FaGithubAlt,
    color: "#181717" // GitHub Black
  },
  {
    skill: "Docker",
    icon: IoLogoDocker,
    color: "#2496ED" // Docker Blue
  },
  {
    skill: "Linux",
    icon: FaLinux,
    color: "#FCC624" // Tux Yellow
  },
  {
    skill:"Gen AI",
    icon:RiAiGenerate2,
    color:"#00FFFF"
  }
];


const AllSkillsSm = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-5 my-12'>
      {
        skills.map((skill,index)=>
         (
            <motion.div 
            variants={fadeIn('up',0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{once:false, amount:0.7}}
            key={index} className='bg-white/10 backdrop-blur-md  p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4 hover:scale-105 border-2 border-transparent hover:bg-gradient-to-r from-cyan to-orange transition-all duration-500'>
                <skill.icon className='text-6xl' style={{color:skill.color}} />
                <p className='text-center text-white mt-4'>{skill.skill}</p>
            </motion.div>
         )
        )
      }
    </div>
  )
}

export default AllSkillsSm
