import React from 'react'
import ContactForm from './ContactForm'

const ContactLeft = () => {
  return (
    <div>
       <div>
        <h2 className='text-orange text-2xl mb-4 ' > Get in Touch</h2>
        <p className='text-white'>Feel free to reach out if you'd like to collaborate <br></br> 
            you are just a few click away!
        </p>
       </div>
       <ContactForm />
    </div>
  )
}

export default ContactLeft
