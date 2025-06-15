import React from 'react'
import Contactinfo from './Contactinfo'
import ContactSocial from './ContactSocial'

const ContactRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img className='max-w-[500px] rounded-[60px]' src="/images/Contact.png" alt="" />
      <Contactinfo/>
      <ContactSocial/>
    </div>
  )
}

export default ContactRight
