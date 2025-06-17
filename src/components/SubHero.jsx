import React from 'react';
import { motion } from 'framer-motion';

const SubHero = () => {
  const items = ['Fast Learner', 'Team Player', 'Detail-Oriented'];

  return (
    <>
      {/* Large & Medium Screens: Flex Row */}
      <div className="hidden sm:flex flex-wrap justify-around text-center uppercase text-4xl md:text-3xl py-6 items-center gap-6 bg-brown border-y border-lightGrey text-lightGrey">
        {items.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="w-auto"
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* Small Screens: Horizontal Auto Scroll */}
      <div className="sm:hidden w-full overflow-x-hidden py-4 bg-brown border-y border-lightGrey text-lightGrey">
        <motion.div
          className="flex gap-10 text-xl uppercase whitespace-nowrap"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear'
          }}
        >
          {[...items, ...items].map((text, index) => (
            <p key={index} className="flex-shrink-0 text-center w-auto">
              {text}
            </p>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SubHero;
