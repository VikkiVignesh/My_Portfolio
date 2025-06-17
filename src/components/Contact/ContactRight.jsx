import React from 'react'
import Contactinfo from './Contactinfo'
import ContactSocial from './ContactSocial'

const ContactRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 sm:gap-12 w-full max-w-[500px] mx-auto'>
      <img
        className='w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] rounded-[40px] object-contain'
        src="/images/Contact.png"
        alt="Contact"
      />
      <Contactinfo />
      <ContactSocial />
    </div>
  )
}

export default ContactRight
