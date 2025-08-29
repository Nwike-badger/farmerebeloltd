// MissionAndVision.jsx
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MissionAndVisionCardWithImage from "../components/MissionAndVisionCardWithImage";
import Footer from "../components/Footer";

import image2 from '../assets/Vector 7.svg';
import image3 from '../assets/Vector(12).png';



const MissionAndVision = () => {
  const scrollRef = useRef(null);

  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[0];
      if (card) {
        const gap = 32;
        const scrollAmount = card.offsetWidth + gap;
        scrollRef.current.scrollBy({
          left: direction * scrollAmount, 
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen pb-16">
        {/* Background Image */}
        <img
          src= "https://res.cloudinary.com/dk95qi8q9/image/upload/f_auto,q_auto/v1756414780/factory_i8p8uo.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Container with responsive padding */}
        <div className="max-w-6xl  px-4 md:px-20 pt-32 md:pt-40">
          {/* h5 with underline */}
          <div className="relative mb-10 w-fit">
            {/* Responsive font size */}
            <h5 className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-normal text-white">
              Our Mandate
            </h5>
            <img
              src={image2}
              alt="Stylish underline"
              className="absolute -bottom-3 left-0 w-[120px] md:w-[150px] rotate-[-9deg]"
            />
          </div>

          {/* h2 heading with responsive font size */}
          <h2 className="text-[32px] md:text-[45px] font-bold leading-[40px] md:leading-[48px] text-white mb-10 max-w-2xl">
            Cultivating Prosperity & Agricultural Self Sufficiency
          </h2>

          {/* paragraph with responsive font size */}
          <p className="text-[18px] md:text-[25px] leading-[28px] md:leading-[32px] font-medium text-white max-w-3xl">
            At Farmer Ebelo Limited, our approach to sustainability goes beyond meeting farming and processing standards. We are driven by a deep commitment to contribute to, and positively impact the development of our host community and the agricultural landscape at large.
          </p>
        </div>
      </section>

      {/* SECTION 2: CARDS with Scroll Controls */}
      <section className="relative mb-20 md:mb-32 pt-16">
        {/* Scrollable container with responsive padding and a class to hide the scrollbar */}
        <div
          ref={scrollRef}
          className="flex gap-8 pl-4 pr-4 md:px-20 overflow-x-auto scroll-smooth hide-scrollbar"
        >
          {/* Card 1 */}
          {/* Responsive card width: 90% of viewport on mobile, fixed width on desktop */}
          {/* Responsive height: auto on mobile to fit content, fixed on desktop */}
          <div className="flex-shrink-0 w-[90vw] md:w-[550px] h-auto md:h-[450px]">
            <MissionAndVisionCardWithImage
              heading="Our Mission"
              content="Our mission at Farmer Ebelo Limited has always been crystal clear: to transform palm farming into a force for prosperity, sustainability, and community empowerment. Through our unwavering commitment to growing agriculture, we do not just produce, we uplift and empower."
              image={image3}
            />
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 w-[90vw] md:w-[550px] h-auto md:h-[450px]">
            <MissionAndVisionCardWithImage
              heading="Our Vision"
              content="To shape a thriving palm industry that uplifts rural communities, inspires investment, and sets the standard for sustainable farming across Nigeria.."
              image={image3}
            />
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 w-[90vw] md:w-[550px] h-auto md:h-[450px]">
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
        </div>

        {/* Scroll Controls Container */}
        {/* Mobile: Centered below the cards with top margin */}
        {/* Desktop: Positioned absolutely at the bottom-right of the section */}
        <div className="mt-8 w-full flex justify-center items-center gap-3 md:w-auto md:absolute md:mt-0 md:-bottom-20 md:right-20">
          <button
            onClick={() => scroll(-1)}
            className="bg-white rounded-full shadow-lg p-3 hover:bg-gray-200 transition"
            style={{ border: "0.5px solid #8C8C8C" }}
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={() => scroll(1)}
            className="bg-white rounded-full shadow-lg p-3 hover:bg-gray-200 transition"
            style={{ border: "0.5px solid #8C8C8C" }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </section>

      
    </div>
  );
};

export default MissionAndVision;