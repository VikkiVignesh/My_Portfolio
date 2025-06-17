import React from 'react'

const ExpInfo = ({ number, text }) => {
  return (
    <div className='flex flex-col justify-center items-center text-center px-2 sm:px-4'>
      <p className='font-bold text-3xl sm:text-4xl text-cyan'>{number}</p>
      <p className='font-semibold text-base sm:text-lg text-lightGrey uppercase -mt-1 sm:-mt-2'>
        {text}
      </p>
    </div>
  )
}

export default ExpInfo
