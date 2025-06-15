import React from 'react'

const AboutText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-center md:text-left'>
      <h1 className='text-cyan  text-4xl mb-8'>About Me</h1>
      <p className='text-white'>
        Highly Motivated and Detail-oriented coding Enthusiast, Eager to kickstart a career in full-stack development.
Possesses a solid foundation in MERN Development, JAVA Development ,Problem-solving, and Android
Development. Overall, I am a self-motivated, passionate, and Quick learner. I am seeking a job opportunity to
apply my skills and contribute to the company.
      </p>
      <button className='border mt-6 border-orange rounded-full py-2 px-4 flex items-center hover:bg-origin-border transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan hover:scale-90 hover:shadow-cyan' >My Projects</button>
    </div>
  )
}

export default AboutText
