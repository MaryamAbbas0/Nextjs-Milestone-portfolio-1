import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Explicit type

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='container mx-auto pt-8' data-aos="zoom-out-left">
      <div className='flex justify-between items-center px-4' data-aos="zoom-out-right">
        {/* Logo and Name */}
        <div data-aos="zoom-out-right" className='flex items-center'>
          <a href='#hero'>
            <Image
              src="/shsh.png"
              alt="Logo"
              className="h-16 w-16"
              width={64} // Specify width and height for optimization
              height={64}
            />
          </a>
          <span className="text-xl font-medium pl-3 hover:text-[#00cfff]">Maryam Abbas</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-10 lg:gap-16 text-lg' data-aos="zoom-out-left">
          {['hero', 'about', 'projects', 'skills', 'contact'].map((section, index) => (
            <li key={index} className='menulink'>
              <a
                href={`#${section}`}
                className='hover:text-[#00cfff] hover:underline hover:underline-offset-4'
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden'>
          {['hero', 'about', 'skills', 'projects', 'contact'].map((section, index) => (
            <li key={index} className='menulink'>
              <a href={`#${section}`} onClick={toggleMenu}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
