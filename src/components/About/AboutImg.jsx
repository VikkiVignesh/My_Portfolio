import React from 'react'

const AboutImg = () => {
  return (
    <div className='w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]'>
      <div className='w-full overflow-hidden rounded-2xl shadow-lg'>
        <img
          src="/images/abt.png"
          alt="AbtImg"
          className='w-full h-auto object-cover'
        />
      </div>
    </div>
  )
}

export default AboutImg
