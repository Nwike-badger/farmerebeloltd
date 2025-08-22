import React from 'react';
import image1 from '../assets/Rectangle 1472.png';
import image2 from '../assets/Rectangle 1514.png';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  
  return (
    <div className="relative w-screen min-h-screen font-commissioner">
      

      {/* Background Section */}
      <section className="relative min-h-[70vh] ">
              {/* Background Image */}
              <img
                src={image1}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
      
              <div className="max-w-6xl  px-21 pt-32 md:pt-45">
                {/* h5 with underline */}
                <div className="relative mb-10 w-fit">
                  <h3 className="text-[34px] leading-[32px] font-bold text-white mb-5">
                    Get In Touch
                  </h3>
                  <p className="text-[20px] md:text-[25px] leading-[32px] font-medium text-white max-w-3xl">
                      We are here to assist you! Please reach out with any questions, feedbacks or inquiries.
                 </p>
                  
                </div>
      
                
              </div>
            </section>

            <section
  className="flex flex-col md:flex-row justify-between items-stretch max-w-[1568px] mx-auto bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-4 transition-opacity duration-700"
>
  {/* Image Card */}
  <div className="basis-full md:basis-[64%] text-center md:text-left flex">
    <img
      src={image2}
      alt="Close-up of freshly harvested palm fruits."
      className="w-full h-full max-h-[700px] rounded-xl object-cover shadow-lg"
    />
  </div>

  {/* Form Card */}
  <div className="basis-full md:basis-[35%] flex">
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h2>

      <form className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            placeholder="Subject of your message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Your Message
          </label>
          <textarea
            placeholder="Type your message here..."
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center w-[200px] h-[50px] bg-black text-white font-semibold text-lg md:text-[20px] 
                            rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none 
                            mt-8 transition-transform hover:scale-105"
              >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>


      

      
    </div>
  );
};

export default ContactUs;
