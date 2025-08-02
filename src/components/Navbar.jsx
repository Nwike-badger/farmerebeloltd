import React, { useState } from 'react';
import Logo from "../assets/Screenshot_2025-07-01_at_9.51.08_pm-removebg-preview.png";
import { ChevronDown } from 'lucide-react';

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState('');

  const navItems = ['Home', 'Our Produce', 'Contact Us'];

  const aboutDropdownItems = [
    'Our Story',
    'Mission',
    'Meet Our Founder',
    'Community Impact',
    'Media Gallery',
  ];

  const getNavItemClasses = (item) => {
    const isActive = activeItem === item;
    const isHovered = hoveredItem === item;
    return `
      relative text-black text-[18px] leading-[24px]
      font-${isActive || isHovered ? 'bold' : 'normal'}
      cursor-pointer transition-all duration-200
      after:content-['']
      after:absolute
      after:-bottom-[4px]
      after:left-0
      after:h-[2px]
      after:w-[30px]
      after:bg-green-600
      after:transition-transform
      ${isActive || isHovered ? 'after:scale-x-100 after:origin-left' : 'after:scale-x-0'}
    `;
  };

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 font-commissioner">
      <div className="flex items-center justify-between py-[24px] px-4 md:px-8 lg:pl-[80px] lg:pr-[200px]">
        <a href="#" className="flex-shrink-0">
          <img
            src={Logo}
            alt="Company Logo"
            className="w-[120px] md:w-[150px] lg:w-[180.61px] h-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[120px]">
          {/* Home */}
          <a
            href="#"
            onClick={() => handleNavItemClick('Home')}
            onMouseEnter={() => setHoveredItem('Home')}
            onMouseLeave={() => setHoveredItem('')}
            className={getNavItemClasses('Home')}
          >
            Home
          </a>

          {/* About Us Dropdown */}
          <div className="relative">
            <div
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                setActiveItem('About Us');
              }}
              onMouseEnter={() => setHoveredItem('About Us')}
              onMouseLeave={() => setHoveredItem('')}
              className={getNavItemClasses('About Us') + ' flex items-center'}
            >
              About Us
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-3 py-6 px-5 w-[350px] bg-white border border-neutral-300 rounded-md z-50">
                {aboutDropdownItems.map((subItem) => (
                  <a
                    key={subItem}
                    href="#"
                    onClick={() => handleNavItemClick(subItem)}
                    className="block px-2 py-2 my-3 text-base text-black text-[18px] hover:bg-green-100 rounded"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Other nav items */}
          {navItems.slice(1).map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => handleNavItemClick(item)}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem('')}
              className={getNavItemClasses(item)}
            >
              {item}
            </a>
          ))}
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
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white px-4 py-4 space-y-4 font-commissioner`}>
        {/* Home */}
        <a
          href="#"
          onClick={() => handleNavItemClick('Home')}
          className={`block text-black text-base px-3 py-2 rounded-md ${
            activeItem === 'Home' ? 'font-bold border-b-2 border-green-600' : 'font-normal'
          }`}
        >
          Home
        </a>

        {/* About Us Dropdown */}
        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center w-full text-left text-black text-base font-normal px-3 py-2 rounded-md"
          >
            About Us
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {isDropdownOpen && (
            <div className="pl-4 mt-1 space-y-1">
              {aboutDropdownItems.map((subItem) => (
                <a
                  key={subItem}
                  href="#"
                  onClick={() => handleNavItemClick(subItem)}
                  className="block text-black text-sm py-1 px-2 hover:bg-gray-100 rounded"
                >
                  {subItem}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Other nav items */}
        {navItems.slice(1).map((item) => (
          <a
            key={item}
            href="#"
            onClick={() => handleNavItemClick(item)}
            className={`block text-black text-base px-3 py-2 rounded-md ${
              activeItem === item ? 'font-bold border-b-2 border-green-600' : 'font-normal'
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
