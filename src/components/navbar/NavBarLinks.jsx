import React from 'react';
import { Link } from 'react-scroll';

const links = [
  { links: "About Me", section: 'about' },
  { links: "Skills", section: 'skills' },
  { links: "Experience", section: 'experience' },
  { links: "Projects", section: 'projects' },
  { links: "Contact", section: 'contact' }
];

const NavBarLinks = ({ isMobile }) => {
  return (
    <ul
      className={`${
        isMobile
          ? 'flex flex-col items-start gap-3'
          : 'flex flex-row gap-6'
      } text-white font-bold`}
    >
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-100}
            className="cursor-pointer hover:text-cyan transition-all duration-300"
          >
            {link.links}
          </Link>
          <div className="bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-300" />
        </li>
      ))}
    </ul>
  );
};

export default NavBarLinks;
