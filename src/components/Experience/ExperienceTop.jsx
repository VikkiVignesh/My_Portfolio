import React from 'react'
import ExpTopLeft from './ExpTopLeft'
import ExpTopMiddle from './ExpTopMiddle'
import ExpTopRight from './ExpTopRight'

const ExperienceTop = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center justify-center w-full px-4 sm:px-6'>
      <ExpTopLeft />
      <ExpTopMiddle />
      <ExpTopRight />
    </div>
  )
}

export default ExperienceTop
