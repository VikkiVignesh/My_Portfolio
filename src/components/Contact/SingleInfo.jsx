import React from 'react'

const SingleInfo = ({ text, Image }) => {
  return (
    <div className='flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-white'>
      <Image className="text-xl sm:text-2xl" />
      <p className='break-words'>{text}</p>
    </div>
  )
}

export default SingleInfo
