import React from 'react';
import image1 from '../assets/Group 61 (copy).png'
import image2 from '../assets/Vector 7.svg';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  
  return (
    <div className="relative w-screen min-h-screen font-commissioner">
      <Navbar />

      {/* Background Section */}
      <section className="relative min-h-[100vh] pb-16">
              {/* Background Image */}
              <img
                src={image1}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
      
              <div className="max-w-6xl  px-21 pt-32 md:pt-40">
                {/* h5 with underline */}
                <div className="relative mb-10 w-fit">
                  <h5 className="text-[24px] leading-[32px] font-normal text-white">
                    Sustainability
                  </h5>
                  <img
                    src={image2}
                    alt="Stylish underline"
                    className="absolute -bottom-3 left-0 w-[150px] rotate[-9deg]"
                  />
                </div>
      
                {/* h2 heading */}
                <h2 className="text-[32px] md:text-[45px] font-bold leading-[48px] text-white mb-10 max-w-2xl">
                  Cultivating Prosperity & Agricultural Self Sufficiency
                </h2>
      
                {/* paragraph */}
                <p className="text-[20px] md:text-[25px] leading-[32px] font-medium text-white max-w-3xl">
                  At Farmer Ebelo Limited, our approach to sustainability goes beyond meeting farming and processing standards. We are driven by a deep commitment to contribute to, and positively impact the development of our host community and the agricultural landscape at large.
                </p>
              </div>
            </section>

      

      <Footer />
    </div>
  );
};

export default ContactUs;
