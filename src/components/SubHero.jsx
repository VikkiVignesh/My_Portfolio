import React from 'react';
import { motion } from 'framer-motion';

const SubHero = () => {
  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut'
      }
    }),
  };

  const items = ['Fast Learner', 'Team Player', 'Detail-Oriented'];

  return (
    <div className='w-full border-y border-lightGrey text-lightGrey flex flex-wrap justify-center text-center uppercase text-4xl md:text-3xl sm:text-xl py-6 items-center gap-6 sm:gap-4 bg-brown'>
      {items.map((text, index) => (
        <motion.p
          key={index}
          custom={index}
          variants={itemVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className='w-auto sm:w-full'
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
};

export default SubHero;
