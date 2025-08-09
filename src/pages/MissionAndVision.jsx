// MissionAndVision.jsx
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MissionAndVisionCardWithImage from "../components/MissionAndVisionCardWithImage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import image1 from '../assets/Rectangle 1505.png';
import image2 from '../assets/Vector 7.svg';
import image3 from '../assets/Vector(12).png';

const MissionAndVision = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -620, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 620, behavior: "smooth" });
    }
  };

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

        <div className="max-w-6xl px-21 pt-32 md:pt-40">
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

      {/* Cards with Scroll Controls */}
      <section className="relative mb-20">
  <div
    ref={scrollRef}
    className="flex gap-8 px-20 py-16 rounded-2xl overflow-x-auto scroll-smooth"
  >
    {/* Card 1 */}
    <div className="flex-shrink-0 w-[550px] h-[450px]">
      <MissionAndVisionCardWithImage
        heading="Our Mission"
        content="Our mission at Farmer Ebelo Limited has always been crystal clear: to transform palm farming into a force for prosperity, 
        sustainability, and community empowerment. Through our unwavering commitment to growing agriculture, we do not just produce, we uplift and empower."
        image={image3}
      />
    </div>

     <div className="flex-shrink-0 w-[550px] h-[450px]">
      <MissionAndVisionCardWithImage
        heading="Our Vision"
        content="To shape a thriving palm industry that uplifts rural communities, inspires investment, and sets the standard for sustainable farming across Nigeria.."
        image={image3}
      />
    </div>

    {/* Card 2 */}
    <div className="flex-shrink-0 w-[550px] h-[450px]">
      <MissionAndVisionCardWithImage
        heading="Our Values"
        isList={true}
        content={[
          "P - Purpose",
          "A - Accountability",
          "L - Leadership",
          "M  -Mindfulness",
          "S - Stewardship"
        ]}
        image={image3}
      />
    </div>

    {/* Card 3 */}
   
  </div>

  {/* Bottom Right Controls */}
  <div className="flex gap-3 absolute -bottom-5 right-20 ">
  <button
    onClick={scrollLeft}
    className="bg-white rounded-full shadow-lg p-3 hover:bg-gray-200 transition"
    style={{ border: "0.5px solid #8C8C8C" }}
  >
    <ChevronLeft size={28} />
  </button>

  <button
    onClick={scrollRight}
    className="bg-white rounded-full shadow-lg p-3 hover:bg-gray-200 transition"
    style={{ border: "0.5px solid #8C8C8C" }}
  >
    <ChevronRight size={28} />
  </button>
</div>

</section>


      <Footer />
    </div>
  );
};

export default MissionAndVision;
