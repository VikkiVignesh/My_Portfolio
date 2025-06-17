import React from 'react';

const SubHero = () => {
  return (
    <div className='w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase text-4xl md:text-3xl sm:text-2xl py-6 items-center gap-4 bg-brown'>
      <p className='md:block sm:hidden'>Fast Learner</p>
      <p className='md:block sm:hidden'>Team Player</p>
      <p>Detail-Oriented</p>
    </div>
  );
};

export default SubHero;
