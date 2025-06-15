import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import SingleInfo from './SingleInfo';

const Contactinfo = () => {
  return (
    <div className=' flex flex-col gap-4 text-white'>
       <SingleInfo text={"vikki.vignesh6366@gmail.com"} Image={IoMdMail}/>
       <SingleInfo text={"+91 6366051099"} Image={FaPhoneAlt}/>
       <SingleInfo text={"Tank Road Malur"} Image={MdLocationCity}/>
    </div>
  )
}

export default Contactinfo
