import React, { useState } from 'react';
import Logo from "../assets/Screenshot_2025-07-01_at_9.51.08_pm-removebg-preview.png";

const MenuIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(''); 

  const navItems = [
    'Home',
    'About Us',
    'Our Produce',
    'Contact Us',
  ];

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md font-commissioner">
      <div className="flex items-center justify-between py-[24px] pl-[80px] pr-[140px]">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src={Logo}
            alt="Company Logo"
            className="w-[219.61px] h-[86px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[120px]">
          {navItems.map((item) => {
            const isActive = activeItem === item;
            return (
              <a
                key={item}
                href="#"
                onClick={() => handleNavItemClick(item)}
                className={`
                  relative text-black text-[20px] leading-[24px]
                  font-${isActive ? 'bold' : 'normal'}
                  cursor-pointer transition-all duration-200
                  after:content-['']
                  after:absolute
                  after:-bottom-[4px]
                  after:left-0
                  after:h-[2px]
                  after:w-[40px]
                  after:bg-green-600
                  after:transition-transform
                  ${isActive ? 'after:scale-x-100 after:origin-left' : 'after:scale-x-0'}
                `}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden pr-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="text-gray-600 focus:outline-none p-2 rounded-md"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-50 px-4 pt-2 pb-4 space-y-1 font-commissioner`}>
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            onClick={() => handleNavItemClick(item)}
            className={`
              block text-black text-[20px] leading-[24px] px-3 py-2 rounded-md
              ${activeItem === item ? 'font-bold border-b-2 border-green-600' : 'font-normal border-b-2 border-transparent'}
              transition
            `}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
