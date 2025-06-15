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
    skill:"SQL",
    icon:SiMysql,
    color:"8A2BE2"
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    color: "#47A248" // Mongo Green
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

const AllSkills = () => {
  return (
    <div className='flex items-center justify-center relative gap-4 max-w-[1200px]' >
     {skills.map((skill,index)=>
    (
        <motion.div
        variants={fadeIn('up',`0.${index}`)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0}}
        >
        <EachSkill key={index} text={skill.skill} icon={<skill.icon/>} color={skill.color}/>
        </motion.div>
    ))}
    </div>
  )
}

export default AllSkills
