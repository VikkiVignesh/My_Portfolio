import React from 'react'
import ExpTopLeft from './ExpTopLeft'
import ExpTopMiddle from './ExpTopMiddle'
import ExpTopRight from './ExpTopRight'

const ExperienceTop = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col gap-10 items-center justify-center' >
      <ExpTopLeft/>
      <ExpTopMiddle/>
      <ExpTopRight/>
    </div>
  )
}

export default ExperienceTop
