import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavBarLinks from './NavBarLinks';
import NavbarBtns from './NavbarBtns';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-orange">
      <div className="max-w-[1200px] mx-auto flex justify-evenly gap-20 items-center px-4 py-3">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Nav + Button */}
        <div className="hidden lg:flex items-center gap-8">
          <NavBarLinks />
          <NavbarBtns />
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl p-2 border border-orange rounded-full text-white"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-black flex flex-col items-start gap-4 py-4 px-6 border-t border-orange">
          <NavBarLinks isMobile />
          <NavbarBtns />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
