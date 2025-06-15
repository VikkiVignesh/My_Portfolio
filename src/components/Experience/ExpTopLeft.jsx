import React from 'react'
import ExpInfo from "./ExpInfo"

const ExpTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
       <p className='text-orange font-bold uppercase text-3xl  text-center font-special'>Since 2023</p>
       <div className=' flex justify-center items-center gap-4'>
        <ExpInfo number={1.5} text={"years"}/>
        <p className='font-bold text-4xl text-lightBrown'>-</p>
        <ExpInfo number={4} text={"Projects"}/>
       </div>
       <p className='text-center text-white'>with 1.5 years of experience building dynamic and user friendly application.</p>
        {/* <ExpInfo number={"$100k"} text={"Max Budget"}/> */}
    </div>
  )
}

export default ExpTopLeft
