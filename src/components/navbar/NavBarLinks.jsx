import React from 'react'
import {Link} from "react-scroll"

const links=[
    {links:"About Me",section:'about'},
    {links:"Skills",section:'skills'},
    {links:"Experience",section:'experience'},
    {links:"Projects",section:'projects'},
    {links:"Contact",section:'contact'}
]

const NavBarLinks = () => {
  return (
    <ul className='flex gap-7 text-white font-bold text-center justify-between lg:flex-row lg:relative sm:flex-col sm:absolute sm:top-[110%] sm:left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/10 backdrop-blur-lg lg:bg-black sm:w-full sm:p-2'>
        {
            links.map((link,index)=>
            (
                <li key={index} className='group' >
                    <Link 
                    to={link.section}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-130}
                    className='cursor-pointer text-white hover:text-cyan transition-all duration-500'>{link.links}</Link>
                    <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
                </li>
            ))
        }
    </ul>
  )
}

export default NavBarLinks
