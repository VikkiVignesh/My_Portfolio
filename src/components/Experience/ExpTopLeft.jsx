import React from 'react'
import ExpInfo from "./ExpInfo"

const ExpTopLeft = () => {
  return (
    <div className='flex flex-col gap-4 sm:gap-6 w-full sm:w-[300px] px-4 sm:px-0'>
      <p className='text-orange font-bold uppercase text-2xl sm:text-3xl text-center font-special'>
        Since 2024
      </p>
      
      <div className='flex flex-wrap justify-center items-center gap-4'>
        <ExpInfo number={1.5} text={"years"} />
        <p className='font-bold text-3xl sm:text-4xl text-lightBrown'>-</p>
        <ExpInfo number={4} text={"Projects"} />
      </div>

      <p className='text-center text-white text-sm sm:text-base px-2'>
        with 1.5 years of experience building dynamic and user friendly applications.
      </p>
    </div>
  )
}

export default ExpTopLeft
