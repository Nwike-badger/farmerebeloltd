import React from 'react';
// Import Link for social icons and NavLink for navigation
import { NavLink, Link } from 'react-router-dom';
import Logo from "../assets/Screenshot_2025-07-01_at_9.51.08_pm-removebg-preview.png";
import image2 from "../assets/flagng.svg";
import image3 from '../assets/Vector(6).svg';
import image4 from '../assets/Vector(7).svg';
import image5 from '../assets/Vector(8).svg';
import image6 from '../assets/Vector(5).svg';

const Footer = () => {
  return (
    <footer className="bg-[#E2FFEF] px-6 md:px-20 py-12 text-black">
      
      <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap lg:justify-between lg:items-start lg:gap-12">
        
        {/* Logo and Description (Original `max-w-sm` is preserved for desktop) */}
        <div className="max-w-sm">
          <NavLink to="/" className="inline-block mb-4">
            <img
              src={Logo}
              alt="Farmer Ebelo Limited Logo"
              className="w-[160.875px] h-[63px] object-contain"
            />
          </NavLink>
          <p className="font-manrope text-sm leading-relaxed md:text-base md:leading-normal">
            Farmer Ebelo Limited is a Nigerian agricultural company with interests in palm cultivation and processing. 
            Our products include palm fruits, palm kernel cake, palm oil, palm kernel oil, and sludge.
          </p>

          <div className="flex items-start gap-3 mt-6">
            <img src={image2} alt="Location" className="w-5 h-auto mt-1 flex-shrink-0" />
            <p className="font-manrope text-sm md:text-base leading-snug">
              Plot 6, Ponuwei Ebelo Drive, Gbelebu, Edo State, Nigeria
            </p>
          </div>
        </div>

        {/* Company Links (margin top only exists on screens smaller than lg) */}
        <div className="lg:mt-8">
          <h4 className="font-commissioner font-semibold text-lg md:text-xl mb-4">Company</h4>
          <ul className="space-y-3">
            <li><NavLink to="/" className="font-manrope text-sm md:text-base hover:underline">Home</NavLink></li>
            <li><NavLink to="/about" className="font-manrope text-sm md:text-base hover:underline">About Us</NavLink></li>
            <li><NavLink to="/about/media-gallery" className="font-manrope text-sm md:text-base hover:underline">Gallery</NavLink></li>
            <li><NavLink to="/contact-us" className="font-manrope text-sm md:text-base hover:underline">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="lg:mt-8">
          <h4 className="font-commissioner font-semibold text-lg md:text-xl mb-4">Legal & Compliance</h4>
          <ul className="space-y-3">
            <li><NavLink to="/privacy-policy" className="font-manrope text-sm md:text-base hover:underline">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms-of-use" className="font-manrope text-sm md:text-base hover:underline">Terms of Use</NavLink></li>
          </ul>
        </div>

        {/* Contact Info + Socials */}
        <div className="lg:mt-8">
          <h4 className="font-commissioner font-semibold text-lg md:text-xl mb-4">Contact</h4>
          <ul className="space-y-2">
            <li><a href="mailto:farmerebelo@gmail.com" className="font-manrope text-sm md:text-base hover:underline">farmerebelo@gmail.com</a></li>
            <li><a href="tel:+2348076788888" className="font-manrope text-sm md:text-base hover:underline">+234 (0) 807 678 8888</a></li>
          </ul>

          <div className="flex items-center gap-6 mt-6 lg:mt-18">
            <Link to="#" aria-label="Our Facebook">
              <img src={image3} alt="Facebook" className="w-6 h-6 object-contain" />
            </Link>
            <Link to="#" aria-label="Our Twitter">
              <img src={image4} alt="Twitter" className="w-5 h-5 object-contain" />
            </Link>
            <Link to="#" aria-label="Our Instagram">
              <img src={image5} alt="Instagram" className="w-6 h-6 object-contain" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black/20 mt-12 pt-6 flex items-center gap-2">
        <img src={image6} alt="" className="w-auto h-4 object-contain" />
        <p className="font-commissioner font-semibold text-xs md:text-sm text-[#8C8C8C]">
          2025 Farmer Ebelo Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;