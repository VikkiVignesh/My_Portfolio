import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const links = [
  { label: "About Me", section: "about" },
  { label: "Skills", section: "skills" },
  { label: "Experience", section: "experience" },
  { label: "Projects", section: "projects" },
  { label: "Contact", section: "contact" }
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      {/* Name and separator */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Vignesh</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto mt-2"></div>
      </div>

      {/* Navigation Links */}
      <nav className="mb-6">
        <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.section}`}
                className="hover:text-cyan-400 transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all duration-300">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all duration-300">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all duration-300">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all duration-300">
          <FaInstagram />
        </a>
        <a href="mailto:youremail@example.com" className="hover:text-cyan-400 transition-all duration-300">
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500 mt-6">&copy; {new Date().getFullYear()} Vignesh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
