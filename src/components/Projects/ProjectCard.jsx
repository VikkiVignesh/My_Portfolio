import React from 'react';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varinats.js";

const ProjectCard = ({ name, year, align, image, link, description }) => {
  // Reverse the logic here
  const isLeft = align === 'left';   // Treat as "right-aligned"
  const isRight = align === 'right'; // Treat as "left-aligned"

  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : isRight ? 'md:flex-row' : ''} gap-8 w-full items-center`}
    >
      {/* Image Section */}
      <div className="max-h-[220px] max-w-[400px] w-full h-[220px] rounded-xl overflow-hidden hover:scale-110 transition-all duration-500 border border-white">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Text Section */}
      <div
        className={`w-full md:max-w-md flex flex-col items-center text-center ${
          isLeft ? 'md:items-start md:text-left' :
          isRight ? 'md:items-end md:text-right' :
          ''
        }`}
      >
        <h2 className="text-orange text-xl sm:text-2xl md:text-3xl font-bold">{name}</h2>
        <h3 className="text-white text-sm sm:text-base font-light font-special">{year}</h3>

        <p className="text-gray-300 text-sm mt-2 max-w-[90%] sm:max-w-[80%] md:max-w-[350px]">
          {description}
        </p>

        {/* View Button */}
        <div className="flex gap-2 text-cyan text-lg mt-3 items-center self-center md:self-auto">
          <a href={link} target="_blank" rel="noopener noreferrer">View</a>
          <BsArrowUpRightCircleFill />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
