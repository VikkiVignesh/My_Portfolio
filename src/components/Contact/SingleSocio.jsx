import React from 'react'

const SingleSocio = ({Icon,link}) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange rounded-full flex items-center justify-center p-3'>
      <a href={link} className='cursor-pointer'>
        <Icon/>
      </a>
    </div>
  )
}

export default SingleSocio
