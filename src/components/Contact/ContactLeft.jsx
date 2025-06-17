import React from 'react'
import ContactForm from './ContactForm'

const ContactLeft = () => {
  return (
    <div className='w-full max-w-[700px] mx-auto px-4 sm:px-6 flex flex-col gap-6'>
      <div>
        <h2 className='text-orange text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4'>Get in Touch</h2>
        <p className='text-white text-sm sm:text-base'>
          Feel free to reach out if you'd like to collaborate. <br className='hidden sm:block' />
          You are just a few clicks away!
        </p>
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactLeft
