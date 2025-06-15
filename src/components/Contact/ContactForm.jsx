import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const ContactForm = () => {

  const form=useRef();
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const [message,setMessage]=useState("")
  const[success ,setSuccess]=useState("")


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message Sent!');
          setTimeout(() => {
            setSuccess("")
          }, 50000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div  className='mt-6'>
      <p className='text-cyan'>{success}</p>
      <form action="" className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
        <input value={name} onChange={(e)=>setName(e.target.value)}  name="from_name" type="text" placeholder='Your Name' required className='h-12 rounded-lg bg-lightBrown px-2 text-white' />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} name="from_email" type="email" placeholder='Your Email' required className='h-12 rounded-lg bg-lightBrown px-2 text-white'/>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} name="message" typeof='text' placeholder='Message' rows={9} cols={50} required  className='rounded-lg bg-lightBrown p-2 text-white'></textarea>
        <button className='w-full cursor-pointer rounded-lg border-cyan text-white font-bold h-12 hover:bg-darkCyan bg-cyan transition-all duration-500' type='submit'> Send</button>
      </form>
    </div>
  )
}

export default ContactForm
