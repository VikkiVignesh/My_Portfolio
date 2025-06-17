import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const ContactMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto mt-[100px] px-4 sm:px-6 lg:px-8'>
      <h2 className='text-3xl sm:text-4xl text-cyan mb-10 text-center'>Contact Me</h2>
      <div className='flex flex-col lg:flex-row justify-between gap-12 sm:gap-16 bg-brown p-6 sm:p-8 rounded-2xl'>
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  )
}

export default ContactMain
