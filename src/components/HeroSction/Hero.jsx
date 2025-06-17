import React from 'react'
import HeroText from './HeroText'
import HeroImg from './HeroImg'
import HeroRadiant from './HeroRadiant'

const Hero = () => {
  return (
    <div className='pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16'>
      <div className='flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4 sm:px-6 gap-10'>
        <HeroText />
        <HeroImg />
        <HeroRadiant />
      </div>
    </div>
  )
}

export default Hero
