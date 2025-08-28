// MeetOurFounder.jsx
import React from 'react';
import image1 from '../assets/founder.png';

const MeetOurFounder = () => {
  return (
    // Use `w-full` and `overflow-x-hidden` for better layout control and to prevent horizontal scroll.
    <div className="w-full min-h-screen font-commissioner bg-white overflow-x-hidden">
      {/* Add vertical padding and center items on all screen sizes for better alignment. */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 lg:px-20 py-16 md:py-24">
        
        {/* Founder Image: This was already well-configured. Added a subtle shadow for depth. */}
        <div className="flex-shrink-0">
          <img
            src={image1}
            alt="Goodluck Ilajufi Ebelo"
            className="w-[90vw] max-w-[407px] h-auto max-h-[600px] rounded-[20px] object-cover shadow-lg"
          />
        </div>

        
        <div className="flex flex-col text-center md:text-left">
          
          
          <h2 className="font-commissioner text-[32px] sm:text-[42px] lg:text-[48px] leading-tight tracking-tight">
            <span className="font-medium">Goodluck Ilajufi</span>
            <br className="hidden md:block" />
            <span className="font-bold">Ebelo</span>
          </h2>

          {/* Role */}
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Managing Director, Farmer Ebelo Limited
          </p>

          
          <hr className="w-full max-w-md mx-auto md:mx-0 my-6 border-t border-gray-400/30" />

          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-x-6 gap-y-2 text-sm sm:text-base text-gray-600">
            <p>Email: <a href="mailto:goodluckebelo@farmerebelo.biz" className="text-blue-600 hover:underline">goodluckebelo@farmerebelo.biz</a></p>
            <p>LinkedIn: <a href="#" className="text-blue-600 hover:underline">Goodluck Ebelo</a></p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default MeetOurFounder;