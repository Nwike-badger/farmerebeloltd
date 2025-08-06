import React from 'react';
import Logo from "../assets/Screenshot_2025-07-01_at_9.51.08_pm-removebg-preview.png";
import image2 from "../assets/Group 50.svg";
import image3 from '../assets/Vector(6).svg';
import image4 from '../assets/Vector(7).svg';
import image5 from '../assets/Vector(8).svg';
import image6 from '../assets/Vector(5).svg';

const Footer = () => {
  return (
    <footer className="bg-[#E2FFEF] px-6 md:px-20 py-12 text-black">
      <div className="flex flex-wrap justify-between gap-12">
        
        {/* Logo and Description */}
        <div className="max-w-sm">
          <a href="#" className="inline-block mb-4">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-[160.875px] h-[63px] object-contain"
            />
          </a>
          <p className="font-manrope  text-[16px] leading-[16px]">
            Farmer Ebelo Limited is a Nigerian agricultural company with interests in palm cultivation and processing. 
            Our products include palm fruits, palm kernel cake, palm oil, palm kernel oil, and sludge.
          </p>

          {/* Address with icon */}
          <div className="flex items-start gap-3 mt-15">
            <img src={image2} alt="location" className="w-[32px] h-[22px] object-contain" />
            <p className="font-manrope  text-[16px] leading-[16px]">
              Plot 6, Ponuwei Ebelo Drive, Gbelebu, Edo State, Nigeria
            </p>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-commissioner font-semibold text-[20px] mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="font-manrope  text-[16px] leading-[16px]">Home</a></li>
            <li><a href="#" className="font-manrope  text-[16px] leading-[16px]">About Us</a></li>
            <li><a href="#" className="font-manrope  text-[16px] leading-[16px]">Gallery</a></li>
            <li><a href="#" className="font-manrope  text-[16px] leading-[16px]">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-commissioner font-semibold text-[20px] mb-4">Legal & Compliance</h4>
          <ul className="space-y-2">
            <li><a href="#" className="font-manrope  text-[16px] leading-[16px]">Privacy Policy</a></li>
            <li><a href="#" className="font-manrope  text-[16px] leading-[16px]">Terms of Use</a></li>
          </ul>
        </div>

        {/* Contact Info + Socials */}
        <div>
          <h4 className="font-commissioner font-semibold text-[20px] mb-4">Contact</h4>
          <p className="font-manrope  text-[16px] leading-[16px] mb-2">farmerebelo@gmail.com</p>
          <p className="font-manrope  text-[16px] leading-[16px] mb-4">+234 (0) 807 678 8888</p>

          {/* Social Icons */}
          <div className="flex gap-10 mt-30">
            <img src={image3} alt="social" className="w-[24px] h-[24px] object-contain" />
            <img src={image4} alt="social" className="w-[20px] h-[32px] object-contain" />
            <img src={image5} alt="social" className="w-[24px] h-[24px] object-contain" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black/20 mt-12 pt-6 flex items-center gap-3">
        <img src={image6} alt="icon" className="w-[16px] h-[16px] object-contain" />
        <p className="font-manrope font-semibold text-[16px] leading-[16px] text-[#8C8C8C]">
          2025 Farmer Ebelo Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
