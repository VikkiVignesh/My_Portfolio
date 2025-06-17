import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState("")

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
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='mt-6 w-full max-w-[600px] mx-auto px-4 sm:px-6'>
      <p className='text-cyan text-center mb-4'>{success}</p>
      <form className='flex flex-col gap-4 w-full' ref={form} onSubmit={sendEmail}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="from_name"
          type="text"
          placeholder='Your Name'
          required
          className='h-12 rounded-lg bg-lightBrown px-3 text-white placeholder-gray-300 w-full'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="from_email"
          type="email"
          placeholder='Your Email'
          required
          className='h-12 rounded-lg bg-lightBrown px-3 text-white placeholder-gray-300 w-full'
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          placeholder='Message'
          rows={6}
          required
          className='rounded-lg bg-lightBrown p-3 text-white placeholder-gray-300 resize-none w-full'
        ></textarea>
        <button
          className='w-full rounded-lg border border-cyan bg-cyan text-white font-bold h-12 hover:bg-darkCyan transition-all duration-500'
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
