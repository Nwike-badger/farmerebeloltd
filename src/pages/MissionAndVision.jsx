import React from "react";
import MissionAndVisionCardWithImage from "../components/MissionAndVisionCardWithImage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import image1 from '../assets/Rectangle 1505.png';
import image2 from '../assets/Vector 7.svg';
import image3 from '../assets/Vector(12).png'

const MissionAndVision = () => {
  return (
        
        
    <div>
        <Navbar />
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

    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-12xl mx-auto py-16 px-4">
      {/* Card 1 - Paragraph */}
      <MissionAndVisionCardWithImage
        heading="Farming"
        content="We are committed to sustainable farming practices that respect the land and support local communities."
        image={image3}
      />

      {/* Card 2 - List */}
      <MissionAndVisionCardWithImage
        heading="Benefits"
        isList={true}
        content={[
          "Fresh produce",
          "Locally sourced",
          "Eco-friendly packaging",
          "Fair trade"
        ]}
        image={image3}
      />

      {/* Card 3 - Paragraph */}
      <MissionAndVisionCardWithImage
        heading="Innovation"
        content="Our technology-driven processes ensure maximum efficiency without compromising on quality."
        image={image3}
      />
    </section>

    <Footer />
    </div>
  );
};

export default MissionAndVision;
