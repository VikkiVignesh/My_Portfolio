import React from 'react';
import { GoArrowDownRight } from "react-icons/go";

const NavbarBtns = () => {
  return (
    <button className='px-4 py-1 rounded-full text-sm sm:text-base font-bold text-white border border-cyan flex items-center justify-center gap-1 bg-gradient-to-r from-cyan to-orange transition-all duration-500 hover:border-r-orange hover:shadow-cyanShadow hover:scale-95'>
      Hire Me
      <div className='hidden sm:inline-block'>
        <GoArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtns;
