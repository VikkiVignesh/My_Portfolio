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
    <nav className="fixed top-4 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1200px] mx-auto bg-black border border-orange rounded-full px-6 py-3 shadow-md">
        <div className="flex items-center justify-between gap-10">
          {/* Logo */}
          <NavbarLogo />

          {/* Desktop Nav + Button */}
          <div className="hidden lg:flex items-center gap-40">
            <NavBarLinks />
            <NavbarBtns />
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl p-2 border border-orange rounded-full text-white"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-2 bg-black rounded-xl flex flex-col items-start gap-4 py-4 px-6 border-t border-orange max-w-[1200px] mx-auto">
          <NavBarLinks isMobile />
          <NavbarBtns />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
