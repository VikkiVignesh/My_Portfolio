import React from 'react'
import SingleSocio from './SingleSocio'
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const ContactSocial = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 sm:gap-6 mt-2'>
      <SingleSocio link="https://github.com/VikkiVignesh" Icon={IoLogoGithub} />
      <SingleSocio link="https://www.linkedin.com/in/vikkivigneshp/?trk=public-profile-join-page" Icon={IoLogoLinkedin} />
      <SingleSocio link="#" Icon={IoLogoInstagram} />
    </div>
  )
}

export default ContactSocial
