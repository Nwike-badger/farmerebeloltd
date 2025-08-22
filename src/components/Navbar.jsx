import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from "../assets/Screenshot_2025-07-01_at_9.51.08_pm-removebg-preview.png";
import { ChevronDown, Menu, X } from 'lucide-react';


const navConfig = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    path: '/about',
    dropdown: [
      { name: 'Our Story', path: '/about/our-story' },
      { name: 'Mission & Vision', path: '/about/mission' },
      { name: 'Meet Our Founder', path: '/about/meet-our-founder' },
      { name: 'Community Impact', path: '/about/community-impact' },
      { name: 'Media Gallery', path: '/about/media-gallery' }
    ]
  },
  { name: 'Our Produce', path: '/our-produce' },
  { name: 'Contact Us', path: '/contact-us' }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();

  
  // const getDesktopLinkClass = ({ isActive, isPending }) => {
  //   const baseClass = `relative text-black text-[18px] leading-[24px] font-normal cursor-pointer
  //    transition-all duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
  //    after:w-[30px] after:bg-green-600 after:transition-transform after:duration-300 after:origin-left`;
  //   return isPending 
  // ? `${baseClass} after:scale-x-0` 
  // : isActive 
  // ? `${baseClass} font-bold after:scale-x-100` 
  // : `${baseClass} hover:font-bold hover:after:scale-x-100 after:scale-x-0`;
  // };

  const getDesktopLinkClass = ({ isActive, isPending }) => {
  const baseClass = `relative text-black text-[18px] leading-[24px]  cursor-pointer 
  transition-all duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
   after:w-[30px] after:bg-green-600 after:transition-transform after:duration-300 after:origin-left`;
  
  return isPending
    ? `${baseClass} after:scale-x-0`
    : isActive
    ? `${baseClass} font-bold after:scale-x-100` 
    : `${baseClass} hover:font-bold hover:after:scale-x-100 after:scale-x-0`;
};



  
  const isAboutActive = location.pathname.startsWith('/about');

  return (
    <nav className="bg-white sticky top-0 z-50 font-commissioner shadow-sm">
      <div className="flex items-center justify-between py-6 px-4 md:px-8 lg:pl-[80px] lg:pr-[200px]">
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={Logo} alt="Farmerebelo Ltd Logo" className="w-[150px] lg:w-[180px] h-auto" />
        </NavLink>

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center gap-[80px]">
          <NavLink to="/" className={getDesktopLinkClass}>Home</NavLink>

          
          <div
            className="relative"
            onMouseEnter={() => setIsDesktopDropdownOpen(true)}
            onMouseLeave={() => setIsDesktopDropdownOpen(false)}
          >
            <div className="">
              <button className={`${getDesktopLinkClass({ isActive: isAboutActive })} flex items-center`}>
                About Us
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {isDesktopDropdownOpen && (
              <div className="absolute left-0 top-full py-4 px-3 w-[280px] bg-white border border-neutral-200 rounded-md shadow-lg">
                {navConfig.find(item => item.name === 'About Us').dropdown.map((subItem) => (
                  <NavLink
                    key={subItem.name}
                    to={subItem.path}
                    className="block px-4 py-3 text-base text-black hover:bg-green-50 rounded-md"
                    onClick={() => setIsDesktopDropdownOpen(false)}
                  >
                    {subItem.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/our-produce" className={getDesktopLinkClass}>Our Produce</NavLink>
          <NavLink to="/contact-us" className={getDesktopLinkClass}>Contact Us</NavLink>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-6 space-y-2">
          <NavLink to="/" className={({isActive}) => `block p-3 rounded-md ${isActive ? 'font-bold bg-green-100' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          
          <div>
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className={`flex items-center justify-between w-full p-3 rounded-md ${isAboutActive ? 'font-bold bg-green-100' : ''}`}
            >
              About Us
              <ChevronDown className={`h-5 w-5 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileDropdownOpen && (
              <div className="pl-4 mt-2 space-y-1 border-l-2 border-green-200">
                {navConfig.find(item => item.name === 'About Us').dropdown.map((subItem) => (
                  <NavLink
                    key={subItem.name}
                    to={subItem.path}
                    className={({isActive}) => `block p-3 rounded-md text-sm ${isActive ? 'font-bold text-green-700' : 'text-gray-700'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subItem.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/our-produce" className={({isActive}) => `block p-3 rounded-md ${isActive ? 'font-bold bg-green-100' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Our Produce</NavLink>
          <NavLink to="/contact-us" className={({isActive}) => `block p-3 rounded-md ${isActive ? 'font-bold bg-green-100' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;