import React from 'react';
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import image2 from '../assets/Vector 7.svg';
import image3 from '../assets/founder.png';

const OurStory = () => {
  return (
    <div className="relative w-screen min-h-screen font-commissioner">
      {/* Background Section */}
      <section className="relative min-h-[100vh] pb-16">
        <img
          src="https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414780/farm5_po3624.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="max-w-6xl px-21 pt-32 md:pt-40">
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

          <h2 className="text-[32px] md:text-[45px] font-bold leading-[48px] text-white mb-10 max-w-2xl">
            Cultivating Prosperity & Agricultural Self Sufficiency
          </h2>

          <p className="text-[20px] md:text-[25px] leading-[32px] font-medium text-white max-w-3xl">
            At Farmer Ebelo Limited, our approach to sustainability goes beyond meeting farming and processing standards. We are driven by a deep commitment to contribute to, and positively impact the development of our host community and the agricultural landscape at large.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        className="flex flex-col md:flex-row justify-between items-center max-w-[1568px] mx-auto bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-4"
      >
        {/* Text with slide-in */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.7 }}
          className="basis-full md:basis-[60%] text-center md:text-left"
        >
          <div className="text-2xl md:text-[47px] text-[#00994D] font-semibold font-commissioner mb-5">
            Our Story
          </div>

          <p className='text-base md:text-[22px] leading-relaxed md:leading-[32px] font-manrope font-medium text-[#383838] max-w-2xl mb-8 mx-auto md:mx-0'>
            Farmer Ebelo Limited is an indigenous agricultural company, ensconced in the riverine swamps of Edo State, with a bold mission to transform palm farming in Nigeria.
          </p>
          <p className='text-base md:text-[22px] leading-relaxed md:leading-[32px] font-manrope font-medium text-[#383838] max-w-2xl mb-8 mx-auto md:mx-0'>
            We began as a small farm with big dreams. Today, with the support of the Edo State Government and the visionary Edo State Oil Palm Programme, we now boast of a thriving 5,000 hectare palm cultivation enterprise. Our core products <span className='text-[#00994D]'>include Palm Kernel Oil, Palm Kernel Cake (PKC), Palm Fruits and Sludge</span>; all processed with precision, care, and purpose.
          </p>
          <p className="text-base md:text-[22px] leading-relaxed md:leading-[32px] font-manrope font-medium text-[#383838] max-w-2xl mb-8 mx-auto md:mx-0">
            Driven by a zero-waste philosophy and a deep commitment to our community, we aim to create lasting value not just for our investors and partners, but for the people of Edo State. Guided by the solid leadership and vision of our founder, we grow with heart - for our people, for progress, and for Nigeria at large.
          </p>
        </motion.div>

        {/* Image with curtain reveal */}
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}   // hidden (curtain down)
          whileInView={{ clipPath: "inset(0 0 0% 0)" }} // reveal downwards
          transition={{ duration: 1.9, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.7 }}
          className="basis-full md:basis-[35%] relative overflow-hidden rounded-xl shadow-lg"
        >
          <img
            src={image3}
            alt="Our Chairman"
            className="w-full h-auto max-h-[600px] object-cover"
          />

          {/* Meet Our Chairman overlay */}
          <Link
            to="/about/meet-our-founder"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 
                       px-6 py-3 text-2xl md:text-4xl font-bold 
                       text-white hover:text-[#00994D] 
                       transition-all duration-300 shadow-md 
                       whitespace-nowrap"
          >
            Meet Our Chairman
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default OurStory;
