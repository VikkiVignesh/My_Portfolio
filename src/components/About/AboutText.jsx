import React from 'react'

const AboutText = () => {
  return (
    <div className='flex flex-col text-center md:text-left md:items-start items-center px-4 sm:px-6'>
      <h1 className='text-cyan text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8'>About Me</h1>
      
      <p className='text-white text-sm sm:text-base md:text-lg max-w-[700px]'>
        Highly motivated and detail-oriented coding enthusiast, eager to kickstart a career in full-stack development.
        Possesses a solid foundation in MERN Development, Java Development, Problem-solving, and Android
        Development. Overall, I am a self-motivated, passionate, and quick learner seeking a job opportunity to
        apply my skills and contribute to the company.
      </p>

      <button
        className='border mt-6 border-orange rounded-full py-2 px-6 flex items-center text-white hover:bg-origin-border transition-all duration-500 cursor-pointer text-sm sm:text-base hover:text-cyan hover:scale-95 hover:shadow-md md:self-start'
      >
        My Projects
      </button>
    </div>
  )
}

export default AboutText
