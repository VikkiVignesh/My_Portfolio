import React from 'react'

const SingleSocio = ({ Icon, link }) => {
  return (
    <div className='h-12 w-12 sm:h-14 sm:w-14 border border-orange rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='text-2xl sm:text-3xl text-white flex items-center justify-center w-full h-full'
        aria-label='Social Link'
      >
        <Icon />
      </a>
    </div>
  )
}

export default SingleSocio
