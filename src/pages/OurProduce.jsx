import React from 'react';
import image1 from '../assets/Group 61 (copy).png'
import image2 from '../assets/Vector 7.svg';
import image3 from '../assets/Palm Fruits Image.png';
import image4 from '../assets/Ad545a73c0ee94490ab7908968f0cf4b4A 1.png';
import image5 from '../assets/Rectangle 1511.png'
import image6 from '../assets/Rectangle 1513.png'
import image7 from '../assets/Rectangle 1519.png';



import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OurProduceCards from '../components/OurProduceCards';
import OurProduceImageTextReverse from '../components/OurProduceImageTextReverse';

const OurProduce = () => {

  const cards = [
  { image: image3, text: 'Palm Fruits' },
  { image: image4, text: 'Palm Oil' },
  { image: image5, text: 'Palm Cake' },
  { image: image6, text: 'Palm Kernel Oil' },
  { image: image7, text: 'Sludge' },
];
  
  return (
    <div className="relative w-screen min-h-screen font-commissioner">
      

      {/* Background Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center text-white">
  {/* The background image and overlay are the same as before, as they improve readability on all screen sizes */}
  <div className="absolute inset-0 bg-black -z-20">
    <img
      src={image1}
      alt="Background"
      className="w-full h-full object-cover opacity-60"
    />
  </div>

  {/* Content Container */}
  {/* CHANGED: Using mobile-first padding, then restoring your desktop values at the `md` breakpoint. */}
  <div className="max-w-6xl mx-auto w-full px-4 md:px-21 pt-24 md:pt-32 lg:pt-40">
    {/* h5 with underline */}
    <div className="relative mb-6 md:mb-10 w-fit">
      {/* CHANGED: Mobile font size is `text-xl`, desktop is your original `text-[24px]` */}
      <h5 className="text-xl md:text-[24px] font-normal">
        Sustainability
      </h5>
      <img
        src={image2}
        alt="Stylish underline"
        className="absolute -bottom-2 md:-bottom-3 left-0 w-[100px] md:w-[150px] -[rotate:6deg]"
      />
    </div>

    {/* h2 heading */}
    {/* CHANGED: Mobile font size is `text-3xl`, desktop is your original `md:text-[45px]` */}
    <h2 className="text-3xl md:text-[45px] font-bold leading-tight md:leading-snug mb-6 md:mb-10 max-w-2xl">
      Cultivating Prosperity & Agricultural Self Sufficiency
    </h2>

    {/* paragraph */}
    {/* CHANGED: Mobile font size is `text-lg`, desktop is your original `md:text-[25px]` */}
    <p className="text-lg md:text-[25px] leading-relaxed md:leading-[32px] font-light max-w-3xl">
      At Farmer Ebelo Limited, our approach to sustainability goes beyond meeting farming and processing standards. We are driven by a deep commitment to contribute to, and positively impact the development of our host community and the agricultural landscape at large.
    </p>
  </div>
</section>

{/* REFINED SECTION 2: CARDS GRID (Desktop Spacing Preserved) */}

<section className="bg-gray-100 py-12 md:py-16">
  {/* CHANGED: Using mobile-first padding, then restoring your desktop `px-19` value. */}
  <div className="max-w-8xl mx-auto px-4 md:px-19">
    {/* CHANGED: Using a larger gap on mobile/tablet, then restoring your tighter `gap-2` for the desktop layout. */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-2 justify-items-start">
      {cards.map((card, index) => (
        <OurProduceCards
          key={index}
          image={card.image}
          text={card.text}
          onClick={() => console.log(`Clicked card ${index + 1}`)}
        />
      ))}
    </div>
  </div>
</section>
      {/* <section
                
                className={`flex flex-col md:flex-row justify-between items-center max-w-[1568px] mx-auto bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20 gap-12 lg:gap-4 transition-opacity duration-700 `}
              >
                <div className="basis-full md:basis-[60%] text-center md:text-left">
                  
      
                  <h5 className="text-3xl md:text-[23px] leading-tight md:leading-none font-commissioner font-bold text-black mb-6 max-w-2xl mx-auto md:mx-0">
                    Palm Fruits
                  </h5>
      
                  <p className="text-base md:text-[20px] leading-relaxed md:leading-[32px] font-manrope font-medium text-black max-w-2xl mb-8 mx-auto md:mx-0">
                    Farmer Ebelo Limited draws on years of local farming experience to produce palm-based goods that stand out for their quality and consistency.
                     From careful harvesting to precise processing, our promise is premium, locally-sourced excellent palm.
                  </p>
                </div>
      
                <div className="basis-full md:basis-[38%] relative">
                  <img
                    src={image3}
                    alt="Close-up of freshly harvested palm fruits."
                    className="w-full h-auto max-h-[400px] rounded-xl object-cover"
                  />
                </div>
            </section> */}

            <section>
              <OurProduceImageTextReverse
        imageSrc={image3}
        title="Premium Palm Oil"
        description="Our premium palm oil is extracted using techniques that retain its rich red color, distinctive flavor, and health-boosting nutrients. It’s perfect for traditional and modern culinary use."
        reverse={true}
      />

      <OurProduceImageTextReverse
        imageSrc={image3}
        title="Premium Palm Oil"
        description="Our premium palm oil is extracted using techniques that retain its rich red color, distinctive flavor, and health-boosting nutrients. It’s perfect for traditional and modern culinary use."
        reverse={false
        }
      />
      
            </section>


      

      
    </div>
  );
};

export default OurProduce;
