import React from 'react'

const EachSkill = ({key,text,icon,color}) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500 cursor-pointer hover:shadow-cyan' id={key}>
      <div className='flex flex-col items-center gap-2 relative'>
        <div className='bg-white text-cyan h-[100px] w-[100px] flex justify-center rounded-full hover:text-Grey hover:scale-105 transform transition-all text-full border-4 z-10 border-orange text-4xl py-5 hover:opacity-95' style={{color:color}}>
         {icon}
        </div>
        <p className='text-white z-10'>{text}</p>
        <div className='w-[100px] h-[100px] bg-orange absolute top-[45px]'></div>
      </div>
    </div>
  )
}

export default EachSkill
