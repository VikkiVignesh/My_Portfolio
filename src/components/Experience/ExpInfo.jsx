import React from 'react'

const ExpInfo = ({number,text}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
       <p className='font-bold text-4xl text-cyan' >{number}</p>
       <p className='font-bold text-xl text-lightGrey uppercase -mt-2'>{text}</p>
    </div>
  )
}

export default ExpInfo
